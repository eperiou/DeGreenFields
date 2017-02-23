import React from 'react';
import Link from 'react-router';

const Splash = () => (
  <article className="eventdetail">
    <Link to="/signin">Signin to your account!</Link>
    <Link to="/signup">Signup if not a user!</Link>
    <div className="eventlistbox">
      <h1>Welcome to the What&apos;s Happenin&apos;</h1>
    </div>
  </article>
);

export default Splash;
