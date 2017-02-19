import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor () {
  super()
  this.state = null;
}
// userLogin () {
//   alert('hello')
// }
  this.userLogin() {
    console.log('login');
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
