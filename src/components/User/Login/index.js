import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './Form';

export default function(props) {
  return (
    <div className="login-wrapper ph3 ph5-l pv4 w-60">
      <Form onSubmit={props.handleLogin}/>
    </div>
  );
};
