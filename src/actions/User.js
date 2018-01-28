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
