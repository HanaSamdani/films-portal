import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import * as UserReducers from './User';

export default combineReducers(Object.assign(
  UserReducers,
  { routing: routerReducer }
));
