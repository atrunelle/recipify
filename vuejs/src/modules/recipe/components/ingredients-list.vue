<template>
  <v-card v-if="ingredients.length">
    <v-card-title
      primary-title
      class="justify-space-between">
      <h2 class="headline">Your recipe ingredients list</h2>
      <v-flex md3>
        <v-text-field
          md3
          v-model="recipeName"
          label="Recipe name"/>
      </v-flex>
    </v-card-title>
    <v-list>
      <ingredient-details
        v-for="(ingredient, key) in ingredients"
        :key="key"
        :index="key"
        :ingredient="ingredient"
        :remove="remove"/>
    </v-list>
    <v-card-actions class="justify-end">
      <v-btn
        flat
        id="remove-all-button"
        @click="removeAll">
        Remove all ingredients
      </v-btn>
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
import IngredientDetails from '@/modules/recipe/components/ingredient-details';

export default {
  components: {
    IngredientNutrients,
    IngredientDetails,
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
