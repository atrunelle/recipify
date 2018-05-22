<template>
  <v-card v-if="ingredients.length">
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
        v-for="(ingredient, key) in ingredients"
        :key="key"
        :value="ingredient.active">
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ ingredient.name }} {{ ingredient.nutrients.calories }}cal for {{ ingredient.nutrients.totalWeight }}gr </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action
            :id="`remove-button-${key}`"
            @click="remove(key)">
            <v-icon>delete</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <ingredient-nutrients :nutrients="ingredient.nutrients"/>
      </v-list-group>
    </v-list>
    <v-card-actions class="justify-end">
      <v-btn
        id="remove-all-button"
        @click="removeAll">Remove all ingredients</v-btn>
      <v-btn
        id="save-button"
        color="primary"
        @click="save(recipeName)">
        Save recipe
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import IngredientNutrients from '@/modules/recipe/components/ingredient-nutrients';

export default {
  components: {
    IngredientNutrients,
  },

  data () {
    return {
      recipeName: '',
    };
  },

  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    remove: {
      type: Function,
      required: true,
    },
    removeAll: {
      type: Function,
      required: true,
    },
    save: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style type="scss">
.list__tile__title {
  max-width: 48vw;
}
</style>
