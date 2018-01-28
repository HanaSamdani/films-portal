import 'rxjs';
import { push } from 'react-router-redux'

import API from '../lib/api';
import Storage from '../lib/storage';
import { FILMS_API } from './hosts';
import * as Types from '../actions/constants';
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
              push('/login')
            ];
          }
          return [];
        });
    });
