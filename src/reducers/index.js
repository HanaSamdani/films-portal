import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import * as UserReducers from './User';
import * as FilmReducers from './Film';

export default combineReducers(Object.assign(
  UserReducers,
  FilmReducers,
  {
    routing: routerReducer,
    form: formReducer,
  }
));
