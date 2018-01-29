import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="form-field">
        <label htmlFor="username">Email</label>
        <Field name="username" component="input" type="email" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit" className="primary">Login</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm
