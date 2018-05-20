import axios from 'axios';

axios.defaults.baseURL = '/api';
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

const apiService = {
  defaults: {
    // eslint-disable-next-line no-undef
    apiAuth: `app_id=${APP_ID}&app_key=${APP_KEY}`,
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
};

export default apiService;
