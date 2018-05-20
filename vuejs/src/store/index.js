import Vue from 'vue';
import Vuex from 'vuex';

import app from '@/store/app';
import recipe from '@/modules/recipe/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    recipe,
  },
});

export default store;
