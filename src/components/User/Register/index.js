import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './Form';

export default function(props) {
  return (
    <div className="login-wrapper">
      <Form onSubmit={props.handleRegister}/>
      <a onClick={(e) => props.showLogin(true)}>Click here to login</a>;
    </div>
  );
};
