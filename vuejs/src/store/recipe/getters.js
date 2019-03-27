import * as types from './types';

export default {
  [types.GET_INGREDIENTS]: (state) => state.ingredients,
  [types.GET_RECIPES]: (state) => state.recipes,
  [types.GET_TOTAL_NUTRIENTS]: (state) => state.totalNutrients,
  [types.GET_TOTAL_WEIGHT]: (state) => state.totalWeight,
  [types.GET_TOTAL_CALORIES]: (state) => state.totalCalories,
};
