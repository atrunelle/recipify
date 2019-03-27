import * as types from './types';
// import nutritionService from '@/core/nutrition.service';

export default {
  [types.ADD_INGREDIENT]: (state, payload) => {
    state.ingredients.push(payload);
  },

  [types.REMOVE_INGREDIENT]: (state, payload) => {
    state.ingredients.splice(payload, 1);
  },

  [types.REMOVE_ALL_INGREDIENTS]: (state) => {
    state.ingredients = [];
  },

  [types.SAVE_RECIPE]: (state, payload) => {
    const numberOfRecipes = state.recipes.length;

    state.recipes.push({
      name: payload || `Recipe ${numberOfRecipes + 1}`,
      ingredients: state.ingredients,
    });
  },
};
