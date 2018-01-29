import React from 'react'
import { Field, reduxForm } from 'redux-form'

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Password</label>
        <Field name="password1" component="input" type="password" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Re-type Password</label>
        <Field name="password2" component="input" type="password" />
      </div>
      <button className="btn" type="submit" className="primary">Register</button>
    </form>
  )
}

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm)

export default RegisterForm
