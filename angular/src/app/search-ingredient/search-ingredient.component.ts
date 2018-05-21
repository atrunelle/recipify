import { Component, OnInit } from '@angular/core';
import RecipeService from '../core/recipe.service';

@Component({
  selector: 'app-search-ingredient',
  templateUrl: './search-ingredient.component.html',
  styleUrls: ['./search-ingredient.component.scss']
})
export class SearchIngredientComponent implements OnInit {
  public ingredient: string;
  public numberOfServing = 1;
  public isLoading = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  public addIngredient() {
    this.isLoading = true;
    this.recipeService
      .addIngredient(this.ingredient, this.numberOfServing)
      .subscribe(
        () => {},
        () => {},
        () => {
          this.isLoading = false;
          this.ingredient = '';
        }
      );
  }
}
