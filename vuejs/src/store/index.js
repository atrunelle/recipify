import Vue from 'vue';
import Vuex from 'vuex';

import actions from '@/store/actions';
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
  actions,
  mutations,
});

export default store;
