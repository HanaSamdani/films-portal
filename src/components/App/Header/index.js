import React from 'react';

export default function(props) {
  return (
    <header className="header-wrapper">
      <a onClick={() => props.logout()} >Logout</a>
    </header>
  );
};
