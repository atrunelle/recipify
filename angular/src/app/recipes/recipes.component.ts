import { IRecipe } from './../core/recipe.interface';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import RecipeService from '../core/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public recipes: IRecipe[] = [];
  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

}
