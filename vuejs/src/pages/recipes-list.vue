<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap>
      <recipe-details
        v-for="(recipe, key) in recipes"
        :key="key"
        :recipe="recipe"/>
    </v-layout>

    <v-layout
      v-if="!recipes.length"
      column
      justify-center
      align-center>
      <circle-icon
        :icon="'/static/recipes.svg'"
        alt="recipes icon"
      />
      <h2 class="ma-2 headline">
        No recipes yet
      </h2>
      <p class="body-1">Do not forget to save recipes when you play with ingredients. Once saved, they will show here.</p>
      <v-btn to="/">Create recipe</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import * as recipeTypes from '@/modules/recipe/store/types';

import CircleIcon from '@/components/circle-icon';
import RecipeDetails from '@/modules/recipe/components/recipe-details.vue';

export default {
  components: {
    CircleIcon,
    RecipeDetails,
  },

  computed: {
    ...mapGetters('recipe', {
      recipes: recipeTypes.GET_RECIPES,
    }),
  },
};
</script>
