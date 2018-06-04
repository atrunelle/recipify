import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nutrients-macro-chart',
  templateUrl: './nutrients-macro-chart.component.html',
  styleUrls: ['./nutrients-macro-chart.component.scss']
})
export class NutrientsMacroChartComponent implements OnInit {
  @Input()
  public nutritionData;

  constructor() { }

  ngOnInit() {
  }
}
