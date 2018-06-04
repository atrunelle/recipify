import * as types from './types';
import nutritionService from '../nutrition.service';

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

  [types.CALCULATE_TOTAL_CALORIES]: (state) => {
    state.totalCalories = state.ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.calories + sum;
    }, 0);
  },

  [types.CALCULATE_TOTAL_WEIGHT]: (state) => {
    state.totalWeight = state.ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.totalWeight + sum;
    }, 0);
  },

  [types.CALCULATE_TOTAL_NUTRIENTS]: (state) => {
    if (state.ingredients.length) {
      state.totalNutrients = nutritionService.getTotalNutrients(state.ingredients, state.totalCalories);
    } else {
      state.totalNutrients = [];
    }
  },

  [types.RESET_TOTAL_CALORIES]: (state) => {
    state.totalCalories = 0;
  },

  [types.RESET_TOTAL_WEIGHT]: (state) => {
    state.totalWeight = 0;
  },

  [types.RESET_TOTAL_NUTRIENTS]: (state) => {
    state.totalNutrients = [];
  },
};
