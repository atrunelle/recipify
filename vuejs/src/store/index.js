import Vue from 'vue';
import Vuex from 'vuex';

import mutations from '@/store/mutations';
import recipe from '@/store/recipe/';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recipe,
  },
  state: {
    alert: {
      text: '',
      type: 'error',
    },
  },
  mutations,
});

export default store;
