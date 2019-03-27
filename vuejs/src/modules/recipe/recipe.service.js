import { DIET_LABELS, HEALTH_LABEL, MACRO_NUTRIENTS, MICRO_NUTRIENTS } from './edamam.constant';
import axios from 'axios';

axios.defaults.baseURL = '/api';

const recipeService = {
  defaults: {
    // eslint-disable-next-line no-undef
    apiAuth: `app_id=${process.env.VUE_APP_APP_ID}&app_key=${process.env.VUE_APP_APP_KEY}`,
    foodUrl: `/api/food-database`,
  },

  parseIngredient (ingredientName) {
    const url = `${this.defaults.foodUrl}/parser?ingr=${ingredientName}&${this.defaults.apiAuth}`;

    return axios.get(url)
      .then((d) => d.data);
  },

  getNutrients (ingredient) {
    const url = `${this.defaults.foodUrl}/nutrients?${this.defaults.apiAuth}`;

    return axios.post(url, ingredient)
      .then((d) => d.data);
  },

  formatIngredients (data, numberOfServings = 1) {
    const ingredients = data.parsed.map((item, index) => {
      const value = {
        foodURI: item.food.uri,
      };

      if (item.quantity) {
        value.quantity = item.quantity;
      }

      if (item.measure) {
        value.measureURI = item.measure.uri;
      }
      return value;
    });

    return {
      yield: numberOfServings,
      ingredients,
    };
  },

  getIngredientNutrition (ingredientName, numberOfServings) {
    return this.parseIngredient(ingredientName)
      .then((data) => {
        if (!data.parsed.length) {
          throw new Error(`We couldn't find the food you entered. Please check the format and spelling. Example: 200gr chicken`);
        }
        const ingredients = this.formatIngredients(data, numberOfServings);

        return this
          .getNutrients(ingredients)
          .then((nutrients) => {
            return {
              nutrients,
              name: data.parsed[0].food.label,
            };
          });
      })
      .catch((error) => {
        throw error;
      });
  },

  getDietLabels (items = []) {
    return this.getLabels(DIET_LABELS, items);
  },

  getHealthLabels (items = []) {
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
