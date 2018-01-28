import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import * as UserReducers from './User';

export default combineReducers(Object.assign(
  UserReducers,
  {
    routing: routerReducer,
    form: formReducer,
  }
));
