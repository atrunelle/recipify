<template>
  <v-list>
    <v-list-group
      v-for="(ingredient, index) in ingredients"
      :key="`${ingredient.name}-index`"
      :value="ingredient.active"
    >
      <v-list-tile slot="activator">
        <v-list-tile-content>
          <v-list-tile-title data-test="ingredient-detail">
            {{ ingredient.name }} {{ ingredient.nutrients.calories }}cal for {{ ingredient.nutrients.totalWeight }}gr
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action
          :id="`remove-button-${index}`"
          :data-test="`remove-ingredient-${index}`"
          @click="onRemove(index)"
        >
          <v-icon>delete</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <ingredient-nutrients :nutrients="ingredient.nutrients" />
    </v-list-group>
  </v-list>
</template>

<script>
import IngredientNutrients from '@/components/ingredient-nutrients';

export default {

  components: {
    IngredientNutrients,
  },

  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onRemove (index) {
      this.$emit('remove', index);
    },
  },
};
</script>
