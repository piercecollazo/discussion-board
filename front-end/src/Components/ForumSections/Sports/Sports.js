import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";
import { topicList } from '../../../redux/actions/authAction'

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

export default connect(mapStateToProps, {topicList})(Sports);