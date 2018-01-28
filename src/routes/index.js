import React from 'react';
import { Route } from 'react-router';

import Storage from '../lib/storage';
import App from '../containers/App';
import User from '../components/User';
import FilmsList from '../containers/Film/List';

function requireAuth(nextState, replace) {
  if (!Storage.getAccessToken()) {
    replace({
      pathname: '/user',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function requireNoAuth(nextState, replace) {
  if (Storage.getAccessToken()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default (
  <Route name="app" component={App}>
    <Route path="/" component={FilmsList} onEnter={requireAuth}/>
    <Route path="/:page" component={FilmsList} onEnter={requireAuth}/>
    <Route path="/user" component={User} onEnter={requireNoAuth}/>
  </Route>
);
