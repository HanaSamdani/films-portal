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

export function fetchFilm(token, id) {
  return {
    type: Types.FETCH_FILM,
    token,
    id
  };
}

export function setFilm(payload) {
  return {
    type: Types.SET_FILM,
    payload
  };
}

export function createFilm(token, data) {
  return {
    type: Types.CREATE_FILM,
    token,
    data
  };
}

export function updateFilm(token, id, data) {
  return {
    type: Types.UPDATE_FILM,
    token,
    id,
    data
  };
}
