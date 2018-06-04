import Vue from 'vue';
import Router from 'vue-router';

import RecipeCreator from '@/pages/recipe-creator';
const RecipesList = () => import('@/pages/recipes-list');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'RecipeCreator',
      },
    },
    {
      path: '/recipes/create',
      name: 'RecipeCreator',
      component: RecipeCreator,
    },
    {
      path: '/recipes/list',
      name: 'RecipesList',
      component: RecipesList,
    },
  ],
});
