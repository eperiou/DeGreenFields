import React from 'react';

const Signin = () => (
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
                  <div id="remember" className="checkbox">
                      <label>

                      </label>
                  </div>
                  <button onSubmit={this.userLogin()}
                     className="btn btn-lg btn-primary" type="submit">Login</button>
            </form>
        </div>
    </div>
);

window.signin = signin;
