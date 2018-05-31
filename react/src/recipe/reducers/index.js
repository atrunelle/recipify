import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipesReducer';
import ingredients from './ingredientsReducer';

const reducers = combineReducers({
    routing: routerReducer,
    recipes,
    ingredients,
});

export default reducers;