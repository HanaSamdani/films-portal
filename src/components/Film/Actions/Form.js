import React from 'react'
import { Field } from 'redux-form'

export default function(props) {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="form-field">
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div className="form-field">
        <label htmlFor="description">Description</label>
        <Field name="description" component="input" type="text" />
      </div>
      <div className="form-field">
        <label htmlFor="year">Year</label>
        <Field name="year" component="input" type="text" />
      </div>
      <button className="btn" type="submit">Submit</button>
    </form>
  )
}
