import { createReducer } from '../lib/utilities';
import * as Types from '../actions/constants';
import initialState from '../state';

export const user = createReducer(initialState, {
  [Types.SET_LOGGED_IN](state, action) {
    return Object.assign({}, state, {loggedIn: action.status});
  },

  [Types.SET_USER_TOKEN](state, action) {
    return Object.assign({}, state, {jwtToken: action.token, loggedIn: true});
  },

  [Types.SET_USER](state, action) {
    return Object.assign({}, state, {user: action.payload});
  },
});
