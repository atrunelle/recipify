<template>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <v-flex xs12>
        <search-ingredient />
      </v-flex>
      <v-flex
        xs12
        align-center
        justify-center
      >
        <v-card v-if="ingredients.length">
          <v-card-title
            primary-title
            class="justify-space-between"
          >
            <h2 class="headline">
              Your recipe ingredients list
            </h2>
            <v-flex md3>
              <v-text-field
                md3
                v-model="recipeName"
                label="Recipe name"
              />
            </v-flex>
          </v-card-title>
          <ingredients-details
            data-test="ingredient-details"
            :ingredients="ingredients"
            @remove="remove"
          />
          <v-card-actions class="justify-end">
            <v-btn
              flat
              id="remove-all-button"
              data-test="remove-all"
              @click="removeAll"
            >
              Remove all ingredients
            </v-btn>
            <v-btn
              id="save-button"
              color="primary"
              data-test="save-recipe"
              @click="save(recipeName)"
            >
              Save recipe
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <div v-show="ingredients.length">
        <ingredients-data
          :total-nutrients="totalNutrients"
          :total-weight="totalWeight"
          :total-calories="totalCalories"
        />
        <nutrition-macro
          :total-nutrients="totalNutrients"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import IngredientsDetails from '@/components/ingredients-details';
import SearchIngredient from '@/components/search-ingredient';
import IngredientsData from '@/components/ingredients-data';
import NutritionMacro from '@/components/nutrition-macro';

import { mapState, mapActions, mapGetters } from 'vuex';
import * as recipeTypes from '@/store/recipe/types';

export default {
  name: 'RecipeCreator',

  data () {
    return {
      recipeName: '',
    };
  },

  components: {
    SearchIngredient,
    IngredientsDetails,
    IngredientsData,
    NutritionMacro,
  },

  computed: {
    ...mapState('recipe', [
      'ingredients',
    ]),
    ...mapGetters('recipe', [
      'totalNutrients',
      'totalWeight',
      'totalCalories',
    ]),
  },

  methods: {
    ...mapActions('recipe', {
      remove: recipeTypes.REMOVE_INGREDIENT,
      removeAll: recipeTypes.REMOVE_ALL_INGREDIENTS,
      save: recipeTypes.SAVE_RECIPE,
    }),
  },
};
</script>

<style type="scss" scoped>
.list__tile__title {
  max-width: 48vw;
}
</style>
