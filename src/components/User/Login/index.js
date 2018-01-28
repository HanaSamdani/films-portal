import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './Form';

export default function(props) {
  return (
    <div className="login-wrapper">
      <Form onSubmit={props.handleLogin}/>
      <a onClick={(e) => props.showLogin(false)}>Click here to register</a>
    </div>
  );
};
