import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as modules from './store/modules';

const reducers = combineReducers(modules);
const store = createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
