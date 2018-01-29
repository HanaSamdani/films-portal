import React from 'react';
import { Link } from 'react-router'

export default function(props) {
  return (
    <header className="header-wrapper bg-white">
      <Link className="btn primary" to="/">Home</Link>
      <a className="btn secondary fr" onClick={() => props.logout()} >Logout</a>
    </header>
  );
};
