import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from '../modules/recipe/store/reducers';

export const history = createHistory();

let middleware = [ thunk, routerMiddleware(history) ];

if (process.env.NODE_ENV !== 'production' ) {
  middleware = [
    ...middleware,
    createLogger(),
  ];
}


const store = createStore(reducers, applyMiddleware(...middleware));

export default store;