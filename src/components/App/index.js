import React, { Component } from 'react';

import API from '../../lib/api';
import Header from './Header';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
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
