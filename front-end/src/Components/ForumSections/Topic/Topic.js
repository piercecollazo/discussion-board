import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";
import {postList, createPost} from '../../../redux/actions/authAction';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


class Topic extends Component {
    state = {
        loading: true,
        post:'',
        submitted: false
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        this.props.postList(this.props.match.params.id)
            .then(()=>{
                this.setState({
                    loading: false
                })
            })
            .catch((error)=>{
                console.log(error)
                this.setState({
                    loading: false
                })
            })
    }

    handleChange = (event)=>{
        this.setState({
            post: event.target.value
        })
    }

    postSubmit = ()=>{
        this.props.createPost(this.props.match.params.id, '5dcc5ea1e1d405781c0d57da', this.state.post)
        .then(()=>{
            this.setState({
                post: ''
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <List>
                  {this.props.forumData.posts.map((item)=>{
                    return(
                    <ListItem key={item._id}>
                      <ListItemText primary={item.post} />
                    </ListItem>
                    )
                  })}
                </List>
                
                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">New Post</InputLabel>
                    <FilledInput id="component-filled" onChange={this.handleChange}  />
                    <Button variant="contained" onClick={this.postSubmit}>
                        Submit Post
                    </Button>
                </FormControl>

                <TablePagination
                  component="nav"
                  page={0}
                  rowsPerPage={10}
                  count={100}
                  onChangePage={() => {}}
                />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authUser: state.authUser,
        forumData: state.forumData
    }
  }
  
  export default connect(mapStateToProps, {postList, createPost})(Topic);