import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router'

import Storage from '../../../lib/storage';

export default class List extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    const token = Storage.getAccessToken();

    if(token && this.props.params.page) {
      this.props.fetchFilms(token, this.props.params.page);
    }
  }

  componentWillReceiveProps(nextProps) {
    const token = Storage.getAccessToken();

    if(token && this.props.params.page) {
      this.props.fetchFilms(token, this.props.params.page);
    }
  }

  render() {
    const token = Storage.getAccessToken();

    return (
      <div className="film-list-wrapper">
        <h1>Films</h1>
        {
          this.props.films.results &&
          <ul className="film-list">
            {this.props.films.results.map((item) => (
              <li key={item.id} onClick={() => hashHistory.push(`films/${item.id}`)} className="film-list-item">
                <div>{item.title}</div>
                <div>{item.year}</div>
                <div>
                  <img src={item.img_url} />
                </div>
              </li>
            ))}
          </ul>
        }
        {
          this.props.films.previous &&
          <Link to={`/${(parseInt(this.props.params.page || 0) - 5)}`}>Previous</Link>
        }
        {
          this.props.films.next &&
          <Link to={`/${(parseInt(this.props.params.page || 0) + 5)}`}>Next</Link>
        }
      </div>
    );
  }

};
