import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import Storage from '../../../lib/storage';
import Form from './Form';

let UpdateFilmForm = props => {
  const { handleSubmit } = props
  return (
    <Form handleSubmit={handleSubmit} />
  )
}
UpdateFilmForm = reduxForm({
  form: 'update-film'
})(UpdateFilmForm)

export default class List extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const token = Storage.getAccessToken();

    if(token && this.props.params.id) {
      this.props.fetchFilm(token, this.props.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.id != nextProps.params.id) {
      const token = Storage.getAccessToken();

      if(token && nextProps.params.id) {
        this.props.fetchFilm(token, this.props.params.id);
      }
    }
  }

  handleSubmit(data) {
    console.log(data);
    const token = Storage.getAccessToken();
    if(token) {
      this.props.updateFilm(token, this.props.params.id, data);
    }
  }

  render() {
    return (
      <div className="film-update-wrapper">
        <UpdateFilmForm
          onSubmit={this.handleSubmit}
          initialValues={this.props.film}
        />
      </div>
    );
  }

};
