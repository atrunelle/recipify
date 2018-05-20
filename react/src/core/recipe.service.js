import apiService from '@/core/api.service';
import { DIET_LABELS, HEALTH_LABEL, MACRO_NUTRIENTS, MICRO_NUTRIENTS } from './edamam.constant';

const recipeService = {
  getIngredientNutrition (ingredientName, numberOfServings) {
    return apiService.parseIngredient(ingredientName)
      .then((data) => {
        const ingredients = this.getIngredients(data, numberOfServings);

        return apiService
          .getNutrients(ingredients)
          .then((nutrients) => {
            return {
              nutrients,
              name: data.parsed[0].food.label,
            };
          });
      })
      .catch((error) => {
        throw error.response.data.message;
      });
  },

  getIngredients (data, numberOfServings = 1) {
    const ingredients = data.parsed.map((item, index) => {
      return {
        quantity: item.quantity,
        measureURI: item.measure.uri,
        foodURI: item.food.uri,
      };
    });

    return {
      yield: numberOfServings,
      ingredients,
    };
  },

  getDietLabels (items) {
    return this.getLabels(DIET_LABELS, items);
  },

  getHealthLabels (items) {
    return this.getLabels(HEALTH_LABEL, items);
  },

  getLabels (labelsArray, items) {
    return items.reduce((labels, item) => {
      const label = labelsArray[item];

      if (!label) {
        return labels;
      }

      return labels.concat(label);
    }, []);
  },

  getMacroNutrientsList (items) {
    return this.filterObject(items, (key) => {
      return MACRO_NUTRIENTS.includes(key);
    });
  },

  getMicroNutrientsList (items) {
    return this.filterObject(items, (key) => {
      return MICRO_NUTRIENTS.includes(key);
    });
  },

  filterObject (object, callback) {
    return Object.keys(object).filter(callback)
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {});
  },
};

export default recipeService;
