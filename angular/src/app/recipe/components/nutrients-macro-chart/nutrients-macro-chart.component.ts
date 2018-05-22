import * as d3 from 'd3';
import { Component, OnInit, Input, ElementRef, OnChanges } from '@angular/core';
import { INutrient } from '@/recipe/recipe.interface';

@Component({
  selector: 'app-nutrients-macro-chart',
  templateUrl: './nutrients-macro-chart.component.html',
  styleUrls: ['./nutrients-macro-chart.component.scss']
})
export class NutrientsMacroChartComponent implements OnInit, OnChanges {
  @Input()
  public nutritionData: INutrient[];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.drawChart();
  }

  ngOnChanges() {
    this.clearChart();
    this.drawChart();
  }

  drawChart () {
    const dataset = {
      children: this.nutritionData,
    };
    const diameter = 320;
    const color = d3.scaleOrdinal().range(['#C5E1A5', '#AED581', '#9CCC65']);

    const bubble = d3.pack()
      .size([diameter, diameter])
      .padding(1.5);

    const svg = d3.select(this.elementRef.nativeElement)
      .select('div')
      .append('svg')
      .attr('width', diameter)
      .attr('height', diameter)
      .attr('class', 'bubble');

    const nodes = d3.hierarchy(dataset)
      .sum((d: any) => d.totalQuantity && d.totalQuantity.percentage);

    const node = svg.selectAll('.node')
      .data(bubble(nodes).descendants())
      .enter()
      .filter((d: any) => !d.children)
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => `translate(${d.x}, ${d.y})`);

    node
      .append('title')
      .text((d: any) => d.totalQuantity && `${d.totalQuantity.label} : ${d.totalQuantity.percentage}%`);

    node
      .append('circle')
      .attr('r', (d: any) => d.r)
      .style('fill', (d, i) =>  color(i + '') as string);

    node.append('text')
      .attr('dy', '.2em')
      .style('text-anchor', 'middle')
      .text((d: any) => d.data.totalQuantity.label.substring(0, d.r / 3))
      .attr('font-family', 'sans-serif')
      .attr('font-size', (d: any) => d.r / 5)
      .attr('fill', 'black');

    node.append('text')
      .attr('dy', '1.3em')
      .style('text-anchor', 'middle')
      .text((d: any) => `${d.data.totalQuantity.percentage}%`)
      .attr('font-size', (d: any) => d.r / 7)
      .attr('fill', 'black');

    d3.select(this.elementRef.nativeElement)
      .style('height', `${diameter}px`);
  }

  clearChart () {
    d3.select(this.elementRef.nativeElement)
      .selectAll('svg')
      .remove();
  }
}
