<template>
  <v-card class="search-ingredient">
    <v-card-title primary-title>
      <h2 class="headline">
        What do you have in your fridge?
      </h2>
    </v-card-title>
    <form
      novalidate
      id="search-ingredient-form"
      @submit.prevent="addIngredient"
    >
      <v-layout
        v-bind="rowMdLayout"
        justify-space-between
        align-center
        px-4
      >
        <v-text-field
          class="ma-1"
          label="Ingredient and quantity"
          placeholder="Example: 200gr chicken"
          v-model="ingredient"
        />
        <v-text-field
          class="ma-1"
          label="Number of servings"
          v-model.number="numberOfServing"
        />
        <v-btn
          type="submit"
          :disabled="!ingredient"
          color="primary"
          :loading="isLoading"
        >
          Add
        </v-btn>
      </v-layout>
    </form>
  </v-card>
</template>

<script>
import layoutMixin from '@/core/layout.mixin';

import { mapActions } from 'vuex';
import * as recipeTypes from '@/store/recipe/types';

export default {
  data: () => {
    return {
      ingredient: '',
      numberOfServing: 1,
      isLoading: false,
    };
  },

  mixins: [layoutMixin],

  methods: {
    ...mapActions('recipe', {
      addToRecipe: recipeTypes.ADD_INGREDIENT,
    }),

    addIngredient () {
      this.isLoading = true;
      this.addToRecipe({
        ingredient: this.ingredient,
        numberOfServing: this.numberOfServing,
      })
        .then(() => {
          this.isLoading = false;
          this.ingredient = '';
          this.numberOfServing = 1;
        })
        .catch(() => this.isLoading = false);
    },
  },
};
</script>
