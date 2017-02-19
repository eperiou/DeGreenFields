import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Signin from './Auth/signin.jsx';
import Map_Page from './mainpage/events_mappage.jsx'

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
      <div>
        <Map_Page />
      </div>
    )
  }
}
export default App;
// {/* <Signin hasAccount={this.state.hasAccount}
//   changeSignedIn={this.changeSignedIn.bind(this)}
//   signedIn={this.state.signedIn}/> */}
