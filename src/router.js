import Vue from 'vue';
import Router from 'vue-router';

import RecipeCreator from '@/views/recipe-creator';
const RecipesList = () => import('@/views/recipes-list');

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
