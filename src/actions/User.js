import * as Types from './constants';

export function setLoggedIn(status) {
  return {
    type: Types.SET_LOGGED_IN,
    status
  };
}

export function fetchUserToken(credentials) {
  return {
    type: Types.FETCH_USER_TOKEN,
    credentials
  };
}

export function setUserToken(token) {
  return {
    type: Types.SET_USER_TOKEN,
    token
  };
}

export function registerUser(data) {
  return {
    type: Types.REGISTER_USER,
    data
  };
}

export function logoutUser() {
  return {
    type: Types.LOGOUT_USER
  };
}

export function fetchUser(token) {
  return {
    type: Types.FETCH_USER,
    token
  };
}

export function setUser(payload) {
  return {
    type: Types.SET_USER,
    payload
  };
}
