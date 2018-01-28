import * as Types from './constants';

export function setLoggedIn(status) {
  return {
    type: Types.SET_LOGGED_IN,
    status
  };
}
