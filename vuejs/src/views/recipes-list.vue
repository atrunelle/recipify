<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex
        md4
        v-for="(recipe, key) in recipes"
        :key="key"
      >
        <recipe-details :recipe="recipe" />
      </v-flex>
    </v-layout>

    <v-layout
      v-if="!recipes.length"
      column
      justify-center
      align-center
    >
      <circle-icon
        icon="/recipes.svg"
        alt="recipes icon"
      />
      <h2 class="ma-2 headline">
        No recipes yet
      </h2>
      <p class="body-1">
        Do not forget to save recipes when you play with ingredients. Once saved, they will show here.
      </p>
      <v-btn to="/">
        Create recipe
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

import CircleIcon from '@/components/circle-icon';
import RecipeDetails from '@/components/recipe-details.vue';

export default {
  components: {
    CircleIcon,
    RecipeDetails,
  },

  computed: {
    ...mapState('recipe', ['recipes']),
  },
};
</script>
