import { combineReducers } from 'redux';

import recipes from './recipesReducer';
import ingredients from './ingredientsReducer';

const reducers = combineReducers({
    recipes,
    ingredients,
});

export default reducers;