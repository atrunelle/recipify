import { IIngredient } from '@/modules/recipe/recipe.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss']
})
export class IngredientDetailsComponent implements OnInit {
  @Input()
  public index: number;

  @Input()
  public ingredient: IIngredient;

  @Output()
  remove = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  removeIngredient(index: number, even: Event) {
    event.stopPropagation();
    this.remove.emit(index);
  }
}
