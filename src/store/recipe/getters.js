import nutritionService from '@/core/nutrition.service';

export default {
  totalWeight: (state) => {
    return state.ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.totalWeight + sum;
    }, 0);
  },

  totalCalories: (state) => {
    return state.ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.calories + sum;
    }, 0);
  },

  totalNutrients: (state, getters) => {
    return nutritionService
      .getTotalNutrients(state.ingredients, getters.totalCalories);
  },
};
