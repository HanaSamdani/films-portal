import * as Types from './constants';

export function fetchFilms(token, offset=0, limit=5) {
  return {
    type: Types.FETCH_FILMS,
    token,
    offset,
    limit
  };
}

export function setFilms(payload) {
  return {
    type: Types.SET_FILMS,
    payload
  };
}
