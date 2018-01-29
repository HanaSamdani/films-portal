import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import Storage from '../../../lib/storage';
import Form from './Form';

let CreateFilmForm = props => {
  const { handleSubmit } = props
  return (
    <Form handleSubmit={handleSubmit} />
  )
}

CreateFilmForm = reduxForm({
  form: 'create-film'
})(CreateFilmForm)

export default class List extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    console.log(data);
    const token = Storage.getAccessToken();
    if(token) {
      this.props.createFilm(token, data);
    }
  }

  render() {
    return (
      <div className="film-create-wrapper">
        <h1 className="f1 tc pa4">Create Film</h1>
        <CreateFilmForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }

};
