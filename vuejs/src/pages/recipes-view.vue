<template>
  <v-layout column>
    <h2>List of recipes you created</h2>
    <recipes-list/>
  </v-layout>
</template>

<script>
import RecipesList from '@/modules/recipe/components/recipes-list';

export default {
  name: 'RecipesView',

  components: {
    RecipesList,
  },
};
</script>
