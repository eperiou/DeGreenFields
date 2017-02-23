import React from 'react';
import Link from 'react-router';

const Splash = (props) => (
  <article className="eventdetail">
    <div className="eventlistbox">
      <h1>Welcome to the What&apos;s Happenin&apos;</h1>
      {props.children}
    </div>
  </article>
);

export default Splash;
