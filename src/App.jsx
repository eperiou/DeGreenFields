import React, { Component } from 'react';
import './App.css';


// import Signin from './Auth/signin.jsx';

import MapPage from './mainpage/EventsMappage.jsx'

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
        <MapPage />
      </div>

    );

  }
}
export default App;
// {/* <Signin hasAccount={this.state.hasAccount}
//   changeSignedIn={this.changeSignedIn.bind(this)}
//   signedIn={this.state.signedIn}/> */}
