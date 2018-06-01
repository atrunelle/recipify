import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipesReducer';
import ingredients from './ingredientsReducer';


export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

const reducers = combineReducers({
  routing: routerReducer,
  recipes,
  ingredients,
});

export default reducers;