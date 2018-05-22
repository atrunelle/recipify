import * as types from './types';

export default {
  [types.GET_INGREDIENTS]: (state) => state.ingredients,
  [types.GET_RECIPES]: (state) => state.recipes,
};
