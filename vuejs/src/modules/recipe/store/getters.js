import * as types from './types';

export default {
  [types.GET_RECIPE]: (state) => state.recipeIngredients,
  [types.GET_RECIPES]: (state) => state.recipes,
};
