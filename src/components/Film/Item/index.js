import React, { Component } from 'react';
import { Link } from 'react-router'
import Rating from 'react-rating';

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
    if(this.props.params.id != nextProps.params.id) {
      const token = Storage.getAccessToken();

      if(token && nextProps.params.id) {
        this.props.fetchFilm(token, this.props.params.id);
      }
    }
  }

  render() {
    const token = Storage.getAccessToken();

    return (
      <div>
        <Link to={`films/${this.props.film.id}/edit`}>Edit</Link>
        {
          this.props.film &&
          <div className="film-details-wrapper">
            <h1>{this.props.film.title}</h1>
            <Rating
              initialRating={this.props.film.average_score}
              fractions={2}
              onChange={(rate) => this.props.rateFilm(token, this.props.film.id, rate * 2)}
            />
            <div>
              <img src={this.props.film.img_url} />
            </div>
            <h2>Year</h2>
            <p>{this.props.film.year}</p>
            <h2>Description</h2>
            <p>{this.props.film.description}</p>
          </div>
        }
      </div>
    );
  }

};
