<template>
  <v-flex xs12>
    <v-flex xs12>
      <search-ingredient/>
    </v-flex>
    <v-flex
      xs12
      align-center
      justify-center>
      <ingredients-list
        :ingredients="ingredients"
        :remove="remove"
        :remove-all="removeAll"
        :save="save"/>
    </v-flex>
    <ingredients-data :ingredients="ingredients"/>
  </v-flex>
</template>

<script>
import SearchIngredient from '@/modules/recipe/components/search-ingredient';
import IngredientsList from '@/modules/recipe/components/ingredients-list';
import IngredientsData from '@/modules/recipe/components/ingredients-data';

import { mapGetters, mapActions } from 'vuex';
import * as recipeTypes from '@/modules/recipe/store/types';

export default {
  components: {
    SearchIngredient,
    IngredientsList,
    IngredientsData,
  },

  computed: {
    ...mapGetters('recipe', {
      ingredients: recipeTypes.GET_INGREDIENTS,
    }),
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
