import axios from 'axios';

axios.defaults.baseURL = '/';
const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

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
