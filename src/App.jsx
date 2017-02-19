import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signin from './Auth/signin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      business: false,
    };
  }
  render() {
    return (
      <div>
        <Signin />
      </div>
    );
  }


}

export default App;
