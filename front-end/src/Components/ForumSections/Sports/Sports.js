import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";
import { topicList, createTopic } from '../../../redux/actions/authAction';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class Sports extends Component {
  componentDidMount(){
    this.props.topicList('5dcc5f423e75d6798807bac5')
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
     console.log(this.props.forumData)
}

topicSubmit = ()=>{
  this.props.createTopic('5dcc5f423e75d6798807bac5','5dcc5ea1e1d405781c0d57da',this.state.topicName,this.state.topicPost)
  .then(()=>{
    this.setState({
      topicName: '',
      topicPost: ''
    })
  })
  .catch(error => {
    console.log(error)
  })
}
    render() {
        return (
            <div>
                <List>
                  {this.props.forumData.topics.map((item)=>{
                    return(
                    <ListItem key={item._id}>
                      <ListItemText primary={item.title} onClick={()=>{this.props.history.push(`/topic/${item._id}`)}}/>
                    </ListItem>
                    )
                  })}
                </List>

                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">New Topic</InputLabel>
                    <FilledInput id="component-filled" placeholder='Title' name='topicName' onChange={this.handleChange} />
                </FormControl>

                <FormControl variant="filled">
                <FilledInput id="component-filled" placeholder='Post' name='topicPost'  onChange={this.handleChange} />
                </FormControl>
                <Button variant="contained" onClick={this.topicSubmit}>
                  Post Topic
                </Button>

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

export default connect(mapStateToProps, {topicList, createTopic})(Sports);