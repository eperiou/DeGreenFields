import React from 'react';
import IndexLink from 'react-router';

const Nav = () => (
  <div>
    <IndexLink activeClassName="active" to="/signin">Sign-in</IndexLink>&nbsp;
    <IndexLink activeClassName="active" to="/signup">Sign-up</IndexLink>&nbsp;
  </div>
);

export default Nav;
