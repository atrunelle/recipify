import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-ingredient',
  templateUrl: './search-ingredient.component.html',
  styleUrls: ['./search-ingredient.component.scss']
})
export class SearchIngredientComponent implements OnInit {
  public ingredient: string;
  public numberOfServing = 1;

  @Output()
  add = new EventEmitter<FormGroup>();


  form = this.fb.group({
    numberOfServing: '1',
    ingredient: '',
  });

  constructor(private fb: FormBuilder) {}


  get isDisabled(): boolean {
    return !this.form.value.ingredient;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.add.emit(this.form.value);
    this.form.setValue({
      numberOfServing: '1',
      ingredient: '',
    });
  }
}
