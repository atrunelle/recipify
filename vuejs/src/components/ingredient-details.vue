<template>
  <v-list-group :value="ingredient.active">
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{ ingredient.name }} {{ ingredient.nutrients.calories }}cal for {{ ingredient.nutrients.totalWeight }}gr </v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action
        :id="`remove-button-${index}`"
        @click="remove(index)"
      >
        <v-icon>delete</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    <ingredient-nutrients :nutrients="ingredient.nutrients" />
  </v-list-group>
</template>

<script>
import IngredientNutrients from '@/components/ingredient-nutrients';

export default {

  components: {
    IngredientNutrients,
  },

  props: {
    ingredient: {
      type: Object,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },

    remove: {
      type: Function,
      required: true,
    },
  },
};
</script>
