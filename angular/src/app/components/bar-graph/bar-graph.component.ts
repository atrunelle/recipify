import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
  @Input()
  public label = '';

  @Input()
  public percentage: number;

  constructor() { }

  ngOnInit() {
  }

  get width (): string {
    return `${this.percentage}%`;
  }

  get classes (): string {
    return `bar-graph bar-graph--${this.label.toLowerCase()}`;
  }
}
