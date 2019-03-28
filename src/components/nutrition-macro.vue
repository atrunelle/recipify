<template>
  <v-flex
    xs12
    v-if="totalNutrients.length"
  >
    <v-card>
      <v-card-title>
        <h2 class="headline">
          Macro in recipe
        </h2>
      </v-card-title>
      <v-card-text>
        <p class="body-1">
          Based on 4 calories per gram of carbs and protein, and 9 calories per gram of fat.
        </p>
        <p class="body-1">
          Those numbers are approximation only, as the number of calories per macro change per ingredient and depend on quality and other factor.
        </p>
        <nutrients-macro-chart :nutrition-data="totalNutrients" />
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import NutrientsMacroChart from '@/components/nutrients-macro-chart';

export default {
  components: {
    NutrientsMacroChart,
  },

  props: {
    totalNutrients: {
      type: Array,
      required: true,
    },
  },
};
</script>
