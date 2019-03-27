<template>
  <v-list-group :value="ingredient.active">
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title data-test="ingredient-detail">
          {{ ingredient.name }} {{ ingredient.nutrients.calories }}cal for {{ ingredient.nutrients.totalWeight }}gr
        </v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action
        :id="`remove-button-${index}`"
        data-test="remove-ingredient"
        @click="onRemove"
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
  },

  methods: {
    onRemove () {
      this.$emit('remove', this.index);
    },
  },
};
</script>
