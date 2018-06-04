<template>
  <div
    :class="`bar-graph  bar-graph--${type}`"
    :style="{ width: `${percentage}%` }"
    v-if="hasWidth">
    <p class="bar-graph__text">{{ label }} {{ percentage }}%</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },

  computed: {
    type () {
      return this.label.toLowerCase();
    },

    hasWidth () {
      return this.percentage > 0;
    },
  },
};
</script>

<style lang="scss">
.bar-graph {
  font-weight: 700;
  text-align: center;
  padding: 20px;
  color: #fff;

  &--fat {
    background: #FF5722;
  }

  &--protein {
    background: #FFC107;
  }

  &--carbs {
    background: #3F51B5;
  }

  &__text {
    margin: 0;
  }
}
</style>
