import 'rxjs';
import { push } from 'react-router-redux'

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
            UserActions.setUserToken(response),
            push('/')
          ];
        })
        .catch(error => {
          console.log(`Could not login: ${error.message}`);
          return [];
        });
    });

export const registerUserEpic = action$ =>
  action$.ofType(Types.REGISTER_USER)
    .mergeMap((action) => {
      return API.post('accounts/signup/', action.data, { host: Hosts.USER_API })
        .flatMap((result) => {
          const response = result.data;
          Storage.setAccessToken(response);
          return [
            UserActions.setUserToken(response),
            push('/')
          ];
        })
        .catch(error => {
          console.log(`Could not register: ${error.message}`);
          return [];
        });
    });

export const logoutUserEpic = action$ =>
  action$.ofType(Types.LOGOUT_USER)
    .mergeMap((action) => {
      return API.get('accounts/logout/', { host: Hosts.USER_API })
        .flatMap((result) => {
          Storage.removeAccessToken();
          return [
            UserActions.setLoggedIn(false),
            push('/user')
          ];
        })
        .catch(error => {
          console.log(`Could not sign out: ${error.message}`);
          return [];
        });
    });

export const fetchUserEpic = action$ =>
  action$.ofType(Types.FETCH_USER)
    .mergeMap((action) => {
      return API.get('/accounts/profile/', { host: Hosts.USER_API, token: action.token })
        .flatMap((result) => {
          const response = result.data;
          return [
            UserActions.setUser(response),
            UserActions.setLoggedIn(true)
          ];
        })
        .catch(error => {
          console.log(`Could not sign out: ${error.message}`);
          if (error.response && error.response.status === 401) {
            Storage.removeAccessToken();
            return [
              push('/login')
            ];
          }
          return [];
        });
    });
