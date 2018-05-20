import * as types from './types';

export default {
  [types.ADD_INGREDIENT]: (state, payload) => {
    state.recipeIngredients.push(payload);
  },

  [types.REMOVE_INGREDIENT]: (state, payload) => {
    state.recipeIngredients.splice(payload, 1);
  },

  [types.REMOVE_ALL_INGREDIENTS]: (state) => {
    state.recipeIngredients = [];
  },

  [types.SAVE_RECIPE]: (state, payload) => {
    const numberOfRecipes = state.recipes.length;

    state.recipes.push({
      name: payload || `Recipe ${numberOfRecipes + 1}`,
      ingredients: state.recipeIngredients,
    });
  },
};
