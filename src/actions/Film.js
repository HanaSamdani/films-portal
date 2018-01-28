import * as Types from './constants';

export function fetchFilms(token) {
  return {
    type: Types.FETCH_FILMS,
    token
  };
}

export function setFilms(payload) {
  return {
    type: Types.SET_FILMS,
    payload
  };
}
