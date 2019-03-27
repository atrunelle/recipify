import * as types from './types';
import * as appTypes from '@/store/types';

import recipeService from '@/core/recipe.service';

export default {
  [types.REMOVE_INGREDIENT]: (context, payload) => {
    context.commit(types.REMOVE_INGREDIENT, payload);
    context.commit(types.CALCULATE_TOTAL_WEIGHT);
    context.commit(types.CALCULATE_TOTAL_CALORIES);
    context.commit(types.CALCULATE_TOTAL_NUTRIENTS);
  },

  [types.ADD_INGREDIENT]: (context, payload) => {
    return recipeService
      .getIngredientNutrition(payload.ingredient, payload.numberOfServing)
      .then((results) => {
        context.commit(types.ADD_INGREDIENT, results);
        context.commit(types.CALCULATE_TOTAL_WEIGHT);
        context.commit(types.CALCULATE_TOTAL_CALORIES);
        context.commit(types.CALCULATE_TOTAL_NUTRIENTS);
      })
      .catch((error) => {
        const alert = {
          text: `Error: ${error.message}`,
          type: 'error',
        };

        context.commit(appTypes.SHOW_ALERT, alert, { root: true });
      });
  },

  [types.REMOVE_ALL_INGREDIENTS]: (context) => {
    context.commit(types.REMOVE_ALL_INGREDIENTS);
    context.commit(types.RESET_TOTAL_NUTRIENTS);
    context.commit(types.RESET_TOTAL_CALORIES);
    context.commit(types.RESET_TOTAL_WEIGHT);
  },

  [types.SAVE_RECIPE]: (context, payload) => {
    context.commit(types.SAVE_RECIPE, payload);
    context.commit(types.REMOVE_ALL_INGREDIENTS);
    context.commit(types.RESET_TOTAL_NUTRIENTS);
    context.commit(types.RESET_TOTAL_CALORIES);
    context.commit(types.RESET_TOTAL_WEIGHT);
    const alert = {
      text: `Recipe was successfully saved`,
      type: 'success',
    };

    context.commit(appTypes.SHOW_ALERT, alert, { root: true });
  },

  [types.CALCULATE_TOTAL_CALORIES]: (context) => {
    context.commit(types.CALCULATE_TOTAL_CALORIES);
  },

  [types.CALCULATE_TOTAL_WEIGHT]: (context) => {
    context.commit(types.CALCULATE_TOTAL_WEIGHT);
  },

  [types.CALCULATE_TOTAL_NUTRIENTS]: (context) => {
    context.commit(types.CALCULATE_TOTAL_NUTRIENTS);
  },
};
