import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';import Signin from './Auth/signin.jsx';
import Signup from './Auth/signup.jsx';

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
      <Router history={browserHistory}>
        <Route path='/' component={Signin} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='eventspage' component={MapPage} >
          <Route path='userpage' component={UserPage}/>
        </Route>
        <Route path='*' component={Signup} />
      </Router>
    );

  }
}

export default App;
