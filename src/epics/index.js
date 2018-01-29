import { combineEpics } from 'redux-observable';

import * as UserEpics from './User';
import * as FilmEpics from './Film';

export default combineEpics(
  UserEpics.fetchUserTokenEpic,
  UserEpics.registerUserEpic,
  UserEpics.logoutUserEpic,
  UserEpics.fetchUserEpic,
  FilmEpics.fetchFilmsEpic,
  FilmEpics.fetchFilmEpic,
  FilmEpics.createFilmEpic,
  FilmEpics.updateFilmEpic,
  FilmEpics.rateFilmEpic
);
