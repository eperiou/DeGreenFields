import React from 'react';
import {Link } from 'react-router';

const Nav = () => (
  <div>
    <Link activeClassName="active" to="/eventspage">Events Page</Link>&nbsp;
    <Link activeClassName="active" to="/eventspage/userpage">User Page</Link>&nbsp;
  </div>
);

export default Nav;
