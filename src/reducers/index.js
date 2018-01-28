import { combineReducers } from 'redux';
import * as UserReducers from './User';

export default combineReducers(Object.assign(
  UserReducers,
));
