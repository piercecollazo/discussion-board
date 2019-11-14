import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import { handleLogout } from '../../redux/actions/authAction';

const styles = {
    rightToolbar: {
        marginLeft: 'auto',
        marginRight: -12
    },
    navLinkStyle: {
        textDecoration: 'none',
        color: 'white',
        marginRight: 10
    },
    signupAndSignin: {
        marginLeft: '10px'
    },
    activeLinks: {
        color: 'white',
        textDecoration: 'underline white',
        marginLeft: 'auto'
    }
}


class Navbar extends Component {
    logout = ()=>{
        localStorage.removeItem('jwtToken')
        handleLogout();
    }
    render() {
        
        let navigation = null;

        if (this.props.authUser.isAuthenticated) {
            navigation = (
                <>
                    <NavLink
                        exact
                        to='/user-profile'
                        className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
                        activeStyle={{color: 'white', textDecoration: 'underline white'}}
                    >
                        {this.props.authUser.username || 'Username not fetched'}
                    </NavLink>

                    <NavLink
                        exact
                        to='/'
                        className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
                        activeStyle={{color: 'white', textDecoration: 'underline white'}}
                        onClick={this.logout}
                    >
                        Log Out
                    </NavLink>

                </>
            )
        } else {
            navigation = (
                <>
                    <NavLink 
                        exact 
                        className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
                        activeStyle={{color: 'white', textDecoration: 'underline white'}}
                        to='/sign-up'>
                            Sign up
                    </NavLink>

                    <NavLink 
                        exact 
                        className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
                        activeStyle={{color: 'white', textDecoration: 'underline white'}}
                        to='/sign-in'>
                            Sign in
                    </NavLink>

                </>
            )
        }

        return (
           <AppBar position='static'>
               <Toolbar>
                   <NavLink 
                     exact
                     to='/'
                     className={this.props.classes.navLinkStyle}
                     activeStyle={styles.activeLinks}
                     >General</NavLink>

                    <NavLink 
                     exact
                     to='/politics'
                     className={this.props.classes.navLinkStyle}
                     activeStyle={styles.activeLinks}
                     >Politics</NavLink>

                    <NavLink 
                     exact
                     to='/sports'
                     className={this.props.classes.navLinkStyle}
                     activeStyle={styles.activeLinks}
                     >Sports</NavLink>
                     

                     <section className={this.props.classes.rightToolbar}>
                        
                        {navigation}

                     </section>
               </Toolbar>
           </AppBar>
        )
    }
}

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Navbar));