import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './App.css';

import Splash from './Splash';
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
  }
  changeSignedIn(signedIn) {
    this.setState({ signedIn });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Splash} >
          <IndexRoute component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/eventspage" component={MapPage} >
            <Route path="/userpage" component={UserPage} />
          </Route>
          <Route path="*" component={Signup} />
        </Route>
      </Router>
    );
  }
}

export default App;
