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
    this.props.registerUser(data);
  }

  render() {
    return (
      <div className="user-wrapper w-100">
        {
          this.state.showLogin ?
            <div className="w-100 tc">
              <Login
                handleLogin={this.handleLogin}
              />
              <a className="white mt2 db mt3" onClick={(e) => this.handleFormSwitch(false)}>Click here to register</a>
            </div>
            :
            <div className="w-100 tc">
              <Register
                handleRegister={this.handleRegister}
              />
              <a className="white mt2 db mt3" onClick={(e) => this.handleFormSwitch(true)}>Click here to login</a>
            </div>
        }
      </div>
    );
  }

}
