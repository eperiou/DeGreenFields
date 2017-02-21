import React from 'react';
import Signup from './signup.jsx';
import {Link} from 'react-router'
const Signin = (props) => {
// //props
//   hasAccount
//     changeSignedIn
//         signedIn
//
var logSomething = function () {
    console.log('hi');
};
    return (
      <div className="container">
        <h1 className="welcome text-center">Welcome to Whats Happenin'</h1>
          <div className="card card-container">
          <h2 className="login_title text-center">Login</h2>
            <form  className="form-signin">
              <span id="reauth-email" className="reauth-email"></span>
                <p className="input_title">Email</p>
                    <input type="text" id="inputEmail" className="login_box"
                      placeholder="user01@placename.com"></input>
                    <p className="input_title">Password</p>
                    <input type="password" id="inputPassword" className="login_box" placeholder="******" required></input>
                    <div id="remember" className="checkbox"></div>
                    <button className="btn btn-lg btn-primary" type="submit">Login</button>
                    <Link to='/signup' >"Don't have an account? Get one!"</Link>
              </form>
            </div>
      </div>
    );

  // } else {
  //   return <Signup />;
  // }

}


export default Signin;
