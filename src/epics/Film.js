import 'rxjs';
import { push } from 'react-router-redux'

import API from '../lib/api';
import Storage from '../lib/storage';
import { FILMS_API } from './hosts';
import * as Types from '../actions/constants';
import * as UserActions from '../actions/User';
import * as FilmActions from '../actions/Film';

export const fetchFilmsEpic = action$ =>
  action$.ofType(Types.FETCH_FILMS)
    .mergeMap((action) => {
      return API.get(`films?limit=${action.limit}&offset=${action.offset}`, { host: FILMS_API, token: action.token })
        .flatMap((result) => {
          const response = result.data;
          return [
            FilmActions.setFilms(response),
          ];
        })
        .catch(error => {
          console.log(`Could not fetch films: ${error.message}`);
          if (error.response && error.response.status === 401) {
            Storage.removeAccessToken();
            return [
              UserActions.setLoggedIn(false),
              push('/user')
            ];
          }
          return [];
        });
    });

export const fetchFilmEpic = action$ =>
  action$.ofType(Types.FETCH_FILM)
    .mergeMap((action) => {
      return API.get(`films/${action.id}`, { host: FILMS_API, token: action.token })
        .flatMap((result) => {
          const response = result.data;
          return [
            FilmActions.setFilm(response),
          ];
        })
        .catch(error => {
          console.log(`Could not fetch film: ${error.message}`);
          if (error.response && error.response.status === 401) {
            Storage.removeAccessToken();
            return [
              UserActions.setLoggedIn(false),
              push('/user')
            ];
          }
          return [];
        });
    });

export const createFilmEpic = action$ =>
  action$.ofType(Types.CREATE_FILM)
    .mergeMap((action) => {
      return API.post(`films`, action.data, { host: FILMS_API, token: action.token })
        .flatMap((result) => {
          const response = result.data;
          return [
            FilmActions.setFilm(response),
            push(`films/${response.id}`)
          ];
        })
        .catch(error => {
          console.log(`Could not create film: ${error.message}`);
          if (error.response && error.response.status === 401) {
            Storage.removeAccessToken();
            return [
              UserActions.setLoggedIn(false),
              push('/user')
            ];
          }
          return [];
        });
    });

export const updateFilmEpic = action$ =>
  action$.ofType(Types.UPDATE_FILM)
    .mergeMap((action) => {
      return API.patch(`films/${action.id}`, action.data, { host: FILMS_API, token: action.token })
        .flatMap((result) => {
          const response = result.data;
          return [
            FilmActions.setFilm(response),
            push(`films/${action.id}`)
          ];
        })
        .catch(error => {
          console.log(`Could not update film: ${error.message}`);
          if (error.response && error.response.status === 401) {
            Storage.removeAccessToken();
            return [
              UserActions.setLoggedIn(false),
              push('/user')
            ];
          }
          return [];
        });
    });
