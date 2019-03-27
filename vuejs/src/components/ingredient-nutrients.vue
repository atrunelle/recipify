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
        data-test="macro-labels"
      >
        <h3 class="pa-2">
          {{ nutrient.label }}
        </h3>
        <p>
          {{ nutrient.quantity | round(2) }}{{ nutrient.unit }}
        </p>
      </v-flex>
    </v-layout>

    <div class="text-xs-center pa-2">
      <v-chip
        :key="key"
        v-for="(label, key) in allLabels"
        data-test="all-labels"
      >
        {{ label }}
      </v-chip>
    </div>
  </div>
</template>

<script>
import { DIET_LABELS, HEALTH_LABEL, MACRO_NUTRIENTS } from '@/core/edamam.constant';

export default {
  props: {
    nutrients: {
      type: Object,
      required: true,
    },
  },

  computed: {
    allLabels () {
      const dietsLabels = this.getLabels(DIET_LABELS, this.nutrients.dietLabels);
      const healthLabels = this.getLabels(HEALTH_LABEL, this.nutrients.healthLabels);

      return dietsLabels.concat(healthLabels)
        .filter((label) => !!label);
    },

    macroNutrientsData () {
      const { totalNutrients } = this.nutrients;
      return Object.keys(totalNutrients)
        .filter((key) => {
          return MACRO_NUTRIENTS.includes(key);
        })
        .reduce((obj, key) => {
          obj[key] = totalNutrients[key];
          return obj;
        }, {});
    },
  },

  methods: {
    getLabels (labelsArray, items) {
      return items.reduce((labels, item) => {
        const label = labelsArray[item];

        if (!label) {
          return labels;
        }

        return labels.concat(label);
      }, []);
    },
  },
};
</script>
