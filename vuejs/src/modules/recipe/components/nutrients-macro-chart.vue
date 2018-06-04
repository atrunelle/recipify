<template>
  <v-layout v-bind="rowMdLayout">
    <bar-graph
      v-for="(data, key) in nutritionData"
      :key="key"
      :label="data.totalQuantity.label"
      :percentage="data.totalQuantity.percentage"/>
  </v-layout>
</template>

<script>
import BarGraph from '@/components/bar-graph';
import layoutMixin from '@/core/layout.mixin';

export default {
  props: {
    nutritionData: {
      type: Array,
      required: true,
    },
  },

  mixins: [layoutMixin],

  components: {
    BarGraph,
  },
};
</script>
