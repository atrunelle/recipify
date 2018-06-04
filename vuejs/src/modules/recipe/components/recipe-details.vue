<template>
  <v-card height="100%">
    <v-card-title primary-title>
      <h2 class="headline">{{ recipe.name }}</h2>
    </v-card-title>
    <v-list>
      <v-list-tile
        v-for="(ingredient, key) in recipe.ingredients"
        :key="key">
        <v-list-tile-content>
          <v-list-tile-title>{{ ingredient.name }} {{ ingredient.nutrients.calories }}cal for {{ ingredient.nutrients.totalWeight }}gr </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>
