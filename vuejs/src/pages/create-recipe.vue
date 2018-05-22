<template>
  <v-layout
    row
    wrap>
    <recipe-creator/>
  </v-layout>
</template>

<script>
import RecipeCreator from '@/modules/recipe/recipe-creator';

export default {
  components: {
    RecipeCreator,
  },
};
</script>
