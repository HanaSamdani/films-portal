import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';

export const store = createStore(reducer);

const appContainer = (
  <Provider store={store}>
    <App />
  </Provider>
);

const appDOMNode = document.getElementById('root');

ReactDOM.render(appContainer, appDOMNode);
