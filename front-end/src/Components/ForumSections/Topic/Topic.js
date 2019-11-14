import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";
import {postList} from '../../../redux/actions/authAction'


class Topic extends Component {
    state = {
        loading: true,
        post:'',
        submitted: false
    }

    componentDidMount(){
        this.props.postList(this.props.location.params.id)
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

    render() {
        return (
            <div>
                <List>
                  {this.props.forumData.posts.map((item)=>{
                    return(
                    <ListItem key={item._id}>
                      <ListItemText primary={item.content} />
                    </ListItem>
                    )
                  })}
                </List>

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
  
  export default connect(mapStateToProps, {postList})(Topic);