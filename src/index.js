import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App';
import routes from './routes';
import './assets/styles/index.scss';

const store = createStore(reducer);
const history = syncHistoryWithStore(hashHistory, store)

const appContainer = (
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>
);

const appDOMNode = document.getElementById('root');

ReactDOM.render(appContainer, appDOMNode);
