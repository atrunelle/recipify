<template>
  <div>
    <v-layout
      justify-space-between
      align-center
      row
    >
      <v-flex
        :key="key"
        v-for="(nutrient, key) in macroNutrientsData"
        text-xs-center
      >
        <h3 class="pa-2">
          {{ nutrient.label }}
        </h3>
        <p>{{ nutrient.quantity | round(2) }}{{ nutrient.unit }}</p>
      </v-flex>
    </v-layout>

    <div class="text-xs-center pa-2">
      <v-chip
        :key="key"
        v-for="(label, key) in allLabels"
      >
        {{ label }}
      </v-chip>
    </div>
  </div>
</template>

<script>
import recipeService from '../recipe.service';

export default {
  props: {
    nutrients: {
      type: Object,
      required: true,
    },
  },

  computed: {
    allLabels () {
      const dietsLabels = recipeService.getDietLabels(this.nutrients.dietLabels);
      const healthLabels = recipeService.getHealthLabels(this.nutrients.healthLabels);

      return dietsLabels.concat(healthLabels)
        .filter((label) => !!label);
    },

    macroNutrientsData () {
      return recipeService.getMacroNutrientsList(this.nutrients.totalNutrients);
    },
  },
};
</script>
