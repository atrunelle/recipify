<template>
  <div class="text-xs-center"/>
</template>

<script>
import * as d3 from 'd3';

export default {

  props: {
    nutritionData: {
      type: Array,
      required: true,
    },
  },

  methods: {
    drawChart () {
      const dataset = {
        children: this.nutritionData,
      };
      const diameter = 320;
      const color = d3.scaleOrdinal().range(['#C5E1A5', '#AED581', '#9CCC65']);

      const bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

      const svg = d3.select(this.$el)
        .append('svg')
        .attr('width', diameter)
        .attr('height', diameter)
        .attr('class', 'bubble');

      const nodes = d3.hierarchy(dataset)
        .sum((d) => d.totalQuantity && d.totalQuantity.percentage);

      const node = svg.selectAll('.node')
        .data(bubble(nodes).descendants())
        .enter()
        .filter((d) => !d.children)
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d) => `translate(${d.x}, ${d.y})`);

      node
        .append('title')
        .text((d) => d.totalQuantity && `${d.totalQuantity.label} : ${d.totalQuantity.percentage}%`);

      node
        .append('circle')
        .attr('r', (d) => d.r)
        .style('fill', (d, i) => color(i));

      node.append('text')
        .attr('dy', '.2em')
        .style('text-anchor', 'middle')
        .text((d) => d.data.totalQuantity.label.substring(0, d.r / 3))
        .attr('font-family', 'sans-serif')
        .attr('font-size', (d) => d.r / 5)
        .attr('fill', 'black');

      node.append('text')
        .attr('dy', '1.3em')
        .style('text-anchor', 'middle')
        .text((d) => `${d.data.totalQuantity.percentage}%`)
        .attr('font-size', (d) => d.r / 7)
        .attr('fill', 'black');

      d3.select(this.$el)
        .style('height', `${diameter}px`);
    },
  },

  watch: {
    nutritionData () {
      d3.select(this.$el)
        .selectAll('svg')
        .remove();

      this.drawChart();
    },
  },

  mounted () {
    this.drawChart();
  },
};
</script>
