import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Core/Navbar';
import AltNavbar from './Components/Core/AltNavbar';
// import Header from './Components/Core/Header'


const Signin = React.lazy(() => import('./Components/Core/Signin'));
const Home = React.lazy(() => import('./Components/Core/Home'));
const Signup = React.lazy(() => import('./Components/Core/Signup'));
const NotFound = React.lazy(() => import('./Components/Core/NotFound'))
const General = React.lazy(()=> import('./Components/ForumSections/General/General'))
const Politics = React.lazy(()=> import('./Components/ForumSections/Politics/Politics'))
const Sports = React.lazy(()=> import('./Components/ForumSections/Sports/Sports'))
const Topic = React.lazy(()=> import('./Components/ForumSections/Topic/Topic'))

export default class App extends Component {
  render() {
    return (
      <>  
        <Navbar />
        <Switch>
          <Route exact path='/' component={General} />
          <Route exact path='/politics' component={Politics} />
          <Route exact path='/sports' component={Sports} />
          <Route exact path='/sign-up' component={Signup} />
          <Route exact path='/sign-in' component={Signin} />
          <Route path='topic/:id' component={Topic} />

          <Route path='' component={NotFound} />
        </Switch>
      </>
    )
  }
}