import React, { Component } from 'react';

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
        <div className="content-wrapper">
          { childComponentsWithProps }
        </div>
      </div>
    );
  }

}
