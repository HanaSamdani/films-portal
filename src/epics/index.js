import { combineEpics } from 'redux-observable';

import * as UserEpics from './User';

export default combineEpics(
  UserEpics.fetchUserTokenEpic
);
