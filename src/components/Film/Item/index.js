import React, { Component } from 'react';
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';
// import Rating from 'react-rating';

import Storage from '../../../lib/storage';

export default class List extends Component {

  constructor(props, context) {
    super(props, context);
    this.rateFilm = this.rateFilm.bind(this);
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

  rateFilm(nextValue, prevValue, name) {
    const token = Storage.getAccessToken();
    this.props.rateFilm(token, this.props.film.id, nextValue)
  }

  render() {
    return (
      <div>
        {
          this.props.film &&
          <div className="film-details-wrapper">
            <div className="image w-100 tc" style={{
              backgroundImage: `url(${this.props.film.img_url})`
            }}>
              <h1 className="f1 pt5 pb3 ma0">{this.props.film.title}</h1>
              <p className="f5">{this.props.film.year}</p>

              <StarRatingComponent
                    name="rating"
                    starCount={10}
                    value={this.props.film.average_score}
                    onStarClick={this.rateFilm}
                />
              <p className="f5">
                <Link className="edit-film-btn" to={`films/${this.props.film.id}/edit`}>
                  <i className="fa fa-edit mr3"></i>
                  Edit film
                </Link>
              </p>
            </div>
            <div className="w-100 bg-white tc">
              <h2 className="f2 ma0 pt5 pb3 summary">Summary</h2>
              <p>{this.props.film.description}</p>
            </div>
          </div>
        }
      </div>
    );
  }

};
