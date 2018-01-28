import { createReducer } from '../lib/utilities';
import * as Types from '../actions/constants';
import initialState from '../state';

export const film = createReducer(initialState, {
  [Types.SET_FILMS](state, action) {
    return Object.assign({}, state, {films: action.payload});
  },
});
