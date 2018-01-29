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
        <h1>Films</h1>
        <Link to="films/new">Add new</Link>
        {
          this.props.films.results &&
          <ul className="film-list flex flex-auto flex-wrap pa0">
            {this.props.films.results.map((item) => <ListItem key={item.id} item={item}/>)}
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
