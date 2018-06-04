import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients-data',
  templateUrl: './ingredients-data.component.html',
  styleUrls: ['./ingredients-data.component.scss']
})
export class IngredientsDataComponent implements OnInit {
  @Input()
  public totalNutrients: any[] = [];

  @Input()
  public totalWeight: number;

  @Input()
  public totalCalories: number;

  constructor() { }

  ngOnInit() {
  }
}
