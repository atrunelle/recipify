import { IIngredient } from './../core/recipe.interface';
import { Component, OnInit } from '@angular/core';
import RecipeService from '../core/recipe.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
  public recipeIngredients: IIngredient[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeIngredients$.subscribe((recipeIngredientsData) => {
      this.recipeIngredients = recipeIngredientsData;
    });
  }

  removeIngredient(index: number) {
    this.recipeService.removeIngredient(index);
  }

  removeAllIngredients() {
    this.recipeService.removeAllIngredients();
  }

  saveRecipe () {
    this.recipeService.saveRecipe();
  }
}
