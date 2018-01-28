import React from 'react';
import { Route } from 'react-router';

import Storage from '../lib/storage';
import App from '../containers/App';
import User from '../components/User';

function requireAuth(nextState, replace) {
  if (!Storage.getAccessToken()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}


export default (
  <Route name="app" component={App}>
    <Route path="/" component={User}/>
  </Route>
);
