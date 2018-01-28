import React, { Component } from 'react';

import API from '../../lib/api';
import Login from './Login';
import Register from './Register';

export default class User extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleFormSwitch = this.handleFormSwitch.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      showLogin: true,
    };
  }

  handleFormSwitch(status){
    this.setState({
      showLogin: status,
    });
  }

  handleLogin(data){
    this.props.fetchUserToken(data);
  }

  handleRegister(data){
  }

  render() {
    return (
      <div className="user-wrapper">
        {
          this.state.showLogin ?
            <Login
              showLogin={this.handleFormSwitch}
              handleLogin={this.handleLogin}
            />
            :
            <Register
              showLogin={this.handleFormSwitch}
              handleRegister={this.handleRegister}
            />
        }
      </div>
    );
  }

}
