import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from '../recipe/reducers';

export const history = createHistory();

const middleware = applyMiddleware(
  thunk,
  createLogger(),
  routerMiddleware(history)
);

const store = createStore(reducers, middleware);

export default store;