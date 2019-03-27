import * as types from './types';
import * as appTypes from '@/store/types';

import recipeService from '@/core/recipeApi';

export default {
  [types.REMOVE_INGREDIENT]: (context, payload) => {
    context.commit(types.REMOVE_INGREDIENT, payload);
  },

  [types.ADD_INGREDIENT]: (context, payload) => {
    return recipeService
      .getIngredientNutrition(payload.ingredient, payload.numberOfServing)
      .then((results) => {
        context.commit(types.ADD_INGREDIENT, results);
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
  },

  [types.SAVE_RECIPE]: (context, payload) => {
    context.commit(types.SAVE_RECIPE, payload);
    context.commit(types.REMOVE_ALL_INGREDIENTS);

    const alert = {
      text: `Recipe was successfully saved`,
      type: 'success',
    };

    context.commit(appTypes.SHOW_ALERT, alert, { root: true });
  },
};
