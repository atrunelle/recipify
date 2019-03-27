<template functional>
  <v-flex
    xs12
    v-if="props.totalNutrients.length"
  >
    <v-card>
      <v-card-title primary-title>
        <h2 class="headline">
          Total nutrients
        </h2>
      </v-card-title>
      <v-card-text>
        <h3
          class="subheading"
          data-test="total-calories"
        >
          Calories: {{ props.totalCalories }}cal
        </h3>
        <h3
          class="subheading"
          data-test="total-weight"
        >
          Total Weight: {{ props.totalWeight }}gr
        </h3>
        <v-layout
          align-end
          justify-space-between
        >
          <v-flex text-xs-center>
            <p class="body-1">
              Total Nutrients
            </p>
            <p class="body-1">
              Total Daily percentage
            </p>
          </v-flex>

          <v-flex
            :key="key"
            v-for="(nutrient, key) in props.totalNutrients"
            text-xs-center
            data-test="nutrients-list"
          >
            <h3 class="subheading pa-2">
              {{ nutrient.label }}
            </h3>
            <p class="body-1">
              {{ nutrient.totalQuantity.quantity | round(2) }}{{ nutrient.totalQuantity.unit }}
            </p>
            <p class="body-1">
              {{ nutrient.totalDaily.quantity | round(2) }}{{ nutrient.totalDaily.unit }}
            </p>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
