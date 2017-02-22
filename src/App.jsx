import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import './App.css';

import Signin from './Auth/signin';
import Signup from './Auth/signup';
import MapPage from './mainpage/EventsMappage';
import UserPage from './mainpage/UserPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      business: false,
      hasAccount: true,
    };
    const state = this.state
  }
  changeSignedIn(signedIn) {
    this.setState({ signedIn });
  }

  render() {
    return (
      <Router history={browserHistory}>
        {this.state.signedIn}
        <Route path="/" component={Signin} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/eventspage" component={MapPage} >
          <Route path="/userpage" component={UserPage} />
        </Route>
        <Route path="*" component={Signup} />
      </Router>
    );
  }
}

export default App;
