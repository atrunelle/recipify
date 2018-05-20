<template>
  <div v-if="recipeIngredients.length">
    <v-card>
      <v-card-title primary-title>
        <h2>Total nutrients</h2>
      </v-card-title>
      <v-card-text>
        <h3>Calories: {{ totalCalories }}cal</h3>
        <h3>Total Weight: {{ totalWeight }}gr</h3>
        <v-layout
          align-end
          justify-space-between>
          <v-flex text-xs-center>
            <p>Total Nutrients</p>
            <p>Total Daily percentage</p>
          </v-flex>

          <v-flex
            :key="key"
            v-for="(nutrient, key) in totalNutrients"
            text-xs-center>
            <h3 class="pa-2">{{ nutrient.label }}</h3>
            <p>{{ nutrient.totalQuantity.quantity | round(2) }}{{ nutrient.totalQuantity.unit }}</p>
            <p>{{ nutrient.totalDaily.quantity | round(2) }}{{ nutrient.totalDaily.unit }}</p>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>
        <h2>Macro in recipe</h2>
      </v-card-title>
      <v-card-text>
        <p>Based on 4 calories per gram of carbs and protein, and 9 calories per gram of fat.</p>
        <p>Those numbers are approximation only, as the number of calories per macro change per ingredient and depend on quality and other factor.</p>
      </v-card-text>
      <nutrients-chart :nutrition-data="totalNutrients"/>
    </v-card>
  </div>
</template>

<script>
import NutrientsChart from '@/modules/recipe/components/nutrients-chart';
import { mapGetters } from 'vuex';
import * as recipeTypes from '@/modules/recipe/store/types';

import { MACRO_NUTRIENTS } from '@/core/edamam.constant';

import nutritionService from '@/core/nutrition.service';

export default {
  components: {
    NutrientsChart,
  },

  computed: {
    ...mapGetters('recipe', {
      recipeIngredients: recipeTypes.GET_RECIPE,
    }),

    totalNutrients () {
      return this.getTotalNutrients();
    },

    totalCalories () {
      return nutritionService.getTotalCalories(this.recipeIngredients);
    },

    totalWeight () {
      return nutritionService.getTotalWeight(this.recipeIngredients);
    },
  },

  methods: {
    getTotalNutrients () {
      return MACRO_NUTRIENTS.map((nutrient) => {
        const totalQuantity = this.totalQuantityFor(nutrient);
        const totalDaily = this.totalDailyIntakeFor(nutrient);

        return {
          label: totalQuantity.label,
          totalQuantity: {
            ...totalQuantity,
          },
          totalDaily: {
            ...totalDaily,
          },
        };
      });
    },

    totalQuantityFor (nutrient) {
      return nutritionService.getTotalForNutrient(this.recipeIngredients, 'totalNutrients', nutrient, this.totalCalories);
    },

    totalDailyIntakeFor (nutrient) {
      return nutritionService.getTotalForNutrient(this.recipeIngredients, 'totalDaily', nutrient);
    },
  },
};
</script>
