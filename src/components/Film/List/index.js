import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router'

import Storage from '../../../lib/storage';
import ListItem from './ListItem';

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
    if(this.props.params.page != nextProps.params.page) {
      const token = Storage.getAccessToken();

      if(token && nextProps.params.page) {
        this.props.fetchFilms(token, nextProps.params.page);
      }
    }
  }

  render() {
    const token = Storage.getAccessToken();

    return (
      <div className="film-list-wrapper">
        <h1 className="f1 tc pa4 ma0">Browse Films</h1>
        <p className="tc f5">
          <Link className="add-film-btn" to="films/new">
            <i className="fa fa-plus mr3"></i>
            Add new film
          </Link>
        </p>
        {
          this.props.films.results &&
          <ul className="film-list flex flex-auto flex-wrap pa0">
            {this.props.films.results.map((item) => <ListItem key={item.id} item={item}/>)}
          </ul>
        }
        <div className="pagination pa4">
          {
            this.props.films.previous &&
            <Link className="btn primary ma2" to={`/${(parseInt(this.props.params.page || 0) - 5)}`}>Previous</Link>
          }
          {
            this.props.films.next &&
            <Link className="btn secondary ma2" to={`/${(parseInt(this.props.params.page || 0) + 5)}`}>Next</Link>
          }
        </div>
      </div>
    );
  }

};
