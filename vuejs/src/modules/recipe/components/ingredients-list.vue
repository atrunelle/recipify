<template>
  <v-card v-if="recipeIngredients.length">
    <v-card-title
      primary-title
      class="justify-space-between">
      <h2>Your recipe ingredients list</h2>
      <v-flex md3>
        <v-text-field
          md3
          ng-model="recipeName"
          label="Recipe name"/>
      </v-flex>
    </v-card-title>
    <v-list>
      <v-list-group
        v-for="(ingredient, key) in recipeIngredients"
        :key="key"
        :value="ingredient.active">
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ ingredient.name }} {{ ingredient.nutrients.calories }}cal for {{ ingredient.nutrients.totalWeight }}gr </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action
            :id="`remove-ingredient-${key}`"
            @click="removeIngredient(key)">
            <v-icon>delete</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <nutrients-insight :nutrients="ingredient.nutrients"/>
      </v-list-group>
    </v-list>
    <v-card-actions class="justify-end">
      <v-btn @click="removeAllIngredients">Remove all ingredients</v-btn>
      <v-btn
        color="primary"
        @click="saveRecipe(recipeName)">Save recipe</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import NutrientsInsight from '@/modules/recipe/components/nutrients-insight.vue';

import { mapGetters, mapActions } from 'vuex';
import * as recipeTypes from '@/modules/recipe/store/types';

export default {
  data () {
    return {
      recipeName: '',
    };
  },

  components: {
    NutrientsInsight,
  },

  computed: {
    ...mapGetters('recipe', {
      recipeIngredients: recipeTypes.GET_RECIPE,
    }),
  },

  methods: {
    ...mapActions('recipe', {
      removeIngredient: recipeTypes.REMOVE_INGREDIENT,
      removeAllIngredients: recipeTypes.REMOVE_ALL_INGREDIENTS,
      saveRecipe: recipeTypes.SAVE_RECIPE,
    }),
  },
};
</script>
