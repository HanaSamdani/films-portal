import { createReducer } from '../lib/utilities';
import * as Types from '../actions/constants';
import initialState from '../state';

export const film = createReducer(initialState, {
  [Types.SET_FILMS](state, action) {
    return Object.assign({}, state, {films: action.payload});
  },

  [Types.SET_FILM](state, action) {
    return Object.assign({}, state, {currentFilm: action.payload});
  },
});
