import React, { Component } from 'react';

import API from '../../lib/api';
import Storage from '../../lib/storage';
import Header from './Header';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    const token = Storage.getAccessToken();

    if(token) {
      this.props.fetchUser(token);
      this.props.fetchFilms(token);
    }
  }

  render() {
    const childComponentsWithProps = React.Children.map(
      this.props.children,
      (childComponent) => React.cloneElement(childComponent, this.props)
    );

    return (
      <div className="app-wrapper">
        { this.props.loggedIn && <Header logout={this.props.logoutUser}/> }
        <div className="content-wrapper">
          { childComponentsWithProps }
        </div>
      </div>
    );
  }

}
