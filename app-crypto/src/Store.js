/*
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux';
//import * as thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

//const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
  RootReducer,
  applyMiddleware(thunkMiddleware, logger),
  // compose(
  //   middleware,
  //   devTools({
  //     name: Platform.OS,
  //     hostname: 'localhost',
  //     port: 5678,
  //   }),
  // ),
);

export default Store;
*/

import { createStore, applyMiddleware, compose } from 'redux';
// createStore for store
// applyMiddleware for redux-thunk
// compose for redux tools
import thunk from 'redux-thunk';
import RootReducer from './Reducers';

const initialState = {};
const middleware = [thunk];
const Store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default Store;
