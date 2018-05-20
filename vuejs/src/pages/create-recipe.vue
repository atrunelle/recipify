<template>
  <v-layout
    row
    wrap>
    <make-recipe/>
  </v-layout>
</template>

<script>
import MakeRecipe from '@/modules/recipe/recipe';

export default {
  components: {
    MakeRecipe,
  },
};
</script>
