<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap>
      <v-flex
        md4
        v-for="(recipe, key) in recipes"
        :key="key">
        <v-card height="100%">
          <v-card-title primary-title>
            <h2>{{ recipe.name }}</h2>
          </v-card-title>
          <v-list>
            <v-list-tile
              v-for="(ingredient, key) in recipe.ingredients"
              :key="key">
              <v-list-tile-content>
                <v-list-tile-title>{{ ingredient.name }} {{ ingredient.nutrients.calories }}cal for {{ ingredient.nutrients.totalWeight }}gr </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      v-if="!recipes.length"
      column
      justify-center
      align-center="">
      <v-flex md6>
        <p class="ma-2">You don't have any recipes yet</p>
        <v-btn
          color="primary"
          to="/">Create recipe</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import * as recipeTypes from '@/modules/recipe/store/types';

export default {
  computed: {
    ...mapGetters('recipe', {
      recipes: recipeTypes.GET_RECIPES,
    }),
  },
};
</script>
