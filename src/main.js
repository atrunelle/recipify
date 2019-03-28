// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';

import App from '@/app';
import router from './router';
import store from '@/store';
import '@/core';

import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightGreen.base,
  },
});

const isProd = process.env.NODE_ENV === 'production';

Vue.config.productionTip = !isProd;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
