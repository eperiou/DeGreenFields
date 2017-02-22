import React from 'react';
import Link from 'react-router';

const Signup = () => (
  <div className="container">
    <h1 className="welcome text-center">Welcome to Whats Happenin&apos</h1>
    <div className="card card-container">
      <h2 className="login_title text-center">Signup</h2>
      <form className="form-signin" >
        <span id="reauth-email" className="reauth-email" />
        <p className="input_title">Email</p>
        <input
          type="text" id="inputEmail" className="login_box"
          placeholder="user01@placename.com"
        />
        <p className="input_title">Password</p>
        <input
          type="password" id="inputPassword"
          className="login_box" placeholder="******" required
        />
        <div id="remember" className="checkbox" />
        <button className="btn btn-lg btn-primary" type="submit">Login</button>
        <Link to="/signin" >I&aposm a user go to login page</Link>
      </form>
    </div>
  </div>
);

export default Signup;
