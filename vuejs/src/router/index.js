import Vue from 'vue';
import Router from 'vue-router';

import CreateRecipe from '@/pages/create-recipe';
const RecipesView = () => import('@/pages/recipes-view');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'CreateRecipe',
      },
    },
    {
      path: '/recipes/create',
      name: 'CreateRecipe',
      component: CreateRecipe,
    },
    {
      path: '/recipes/list',
      name: 'RecipesList',
      component: RecipesView,
    },
  ],
});
