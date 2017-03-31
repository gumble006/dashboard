import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import Routes from './routes';

import { LOAD_PREVIOUS } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// check if user already signed in from previous session
const authToken = localStorage.getItem('dashboardToken');
const user = JSON.parse(localStorage.getItem('dashboardUser'));

if (authToken && user) {
  store.dispatch({ type: LOAD_PREVIOUS, payload: user });
}

document.title = 'Dashboard';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.querySelector('.app-container'));

