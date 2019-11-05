import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Core/Navbar';
import Header from './Components/Core/Header'


const Signin = React.lazy(() => import('./Components/Core/Signin'));
const Home = React.lazy(() => import('./Components/Core/Home'));
const Signup = React.lazy(() => import('./Components/Core/Signup'));
const NotFound = React.lazy(() => import('./Components/Core/NotFound'))

export default class App extends Component {
  render() {
    return (
      <>  
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-up' component={Signup} />
          <Route exact path='/sign-in' component={Signin} />

          <Route path='' component={NotFound} />
        </Switch>
      </>
    )
  }
}