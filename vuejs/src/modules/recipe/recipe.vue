<template>
  <v-flex xs12>
    <v-flex xs12>
      <search-ingredient/>
    </v-flex>
    <v-flex
      xs12
      align-center
      justify-center>
      <ingredients-list/>
    </v-flex>
    <v-flex xs12>
      <recipe-data/>
    </v-flex>
  </v-flex>
</template>

<script>
import SearchIngredient from '@/modules/recipe/components/search-ingredient';
import RecipeData from '@/modules/recipe/components/recipe-data';
import IngredientsList from '@/modules/recipe/components/ingredients-list';

export default {
  components: {
    RecipeData,
    IngredientsList,
    SearchIngredient,
  },
};
</script>
