import 'rxjs';

import API from '../lib/api';
import Storage from '../lib/storage';
import * as Types from '../actions/constants';
import * as UserActions from '../actions/User';
import * as Hosts from './hosts';

export const fetchUserTokenEpic = action$ =>
  action$.ofType(Types.FETCH_USER_TOKEN)
    .mergeMap((action) => {
      return API.post('accounts/login/', action.credentials, { host: Hosts.USER_API })
        .flatMap((result) => {
          const response = result.data;
          Storage.setAccessToken(response);
          return [
            UserActions.setUserToken(response)
          ];
        })
        .catch(error => {
          console.log(`Could not login: ${error.message}`);
          return [];
        });
    });
