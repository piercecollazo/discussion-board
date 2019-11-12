import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";


class Topic extends Component {
    state = {
        loading: true
    }

    componentDidMount(){
        this.props.getAllPosts()
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
                    <ListItem href='/#'>
                      <ListItemText primary={item.title} />
                      <ListItemText primary={item.title} />
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
  
  export default connect(mapStateToProps, null)(Topic);