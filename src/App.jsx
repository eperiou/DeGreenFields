import React, { Component } from 'react';
import './App.css';
import {Router, Route, hashHistory } from 'react-router';

import Signin from './Auth/signin.jsx';
import Signup from './Auth/signup.jsx';
import Nav from './Nav.jsx';
import MapPage from './mainpage/EventsMappage.jsx';
import UserPage from './mainpage/UserPage.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      business: false,
      hasAccount: true,
    };
  }
  changeSignedIn(signedIn) {
    this.setState({ signedIn });
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/eventspage' component={MapPage} >
        <Route component path='/userpage' component={UserPage}/>
        </Route>
        <Route path='*' component={Signin} />
      </Router>
    );

  }
}

export default App;
// {/* <Signin hasAccount={this.state.hasAccount}
//   changeSignedIn={this.changeSignedIn.bind(this)}
//   signedIn={this.state.signedIn}/> */}
