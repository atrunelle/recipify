import { FormBuilder } from '@angular/forms';
import { IIngredient } from '@/recipe/recipe.interface';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
  @Input()
  public ingredients: IIngredient[];

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  removeAll = new EventEmitter<any>();

  @Output()
  save = new EventEmitter<any>();

  form = this.fb.group({
    name: '',
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  removeIngredient(index: number, event: Event) {
    event.stopPropagation();
    this.remove.emit(index);
  }

  removeAllIngredients() {
    this.removeAll.emit();
  }

  saveRecipe () {
    this.save.emit(this.form.value);
  }
}
