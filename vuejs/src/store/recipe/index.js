import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  ingredients: [],
  totalNutrients: [],
  totalCalories: 0,
  totalWeight: 0,
  recipes: [],
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
