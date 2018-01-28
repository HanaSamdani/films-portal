import React from 'react';
import { Link } from 'react-router'

export default function(props) {
  return (
    <header className="header-wrapper">
      <Link to="/">Home</Link>
      <a onClick={() => props.logout()} >Logout</a>
    </header>
  );
};
