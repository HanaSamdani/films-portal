import React, { Component } from 'react';
import { Link } from 'react-router'

import Storage from '../../../lib/storage';

export default class List extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    const token = Storage.getAccessToken();

    if(token && this.props.params.id) {
      this.props.fetchFilm(token, this.props.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const token = Storage.getAccessToken();

    if(token && this.props.params.id) {
      this.props.fetchFilm(token, this.props.params.id);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.film &&
          <div className="film-details-wrapper">
            <h1>{this.props.film.title}</h1>
            <div>
              <img src={this.props.film.img_url} />
            </div>
            <h2>Year</h2>
            <p>{this.props.film.year}</p>
            <h2>Description</h2>
            <p>{this.props.film.description}</p>
            <h2>Average Score</h2>
            <p>{this.props.film.average_score}</p>
          </div>
        }
      </div>
    );
  }

};
