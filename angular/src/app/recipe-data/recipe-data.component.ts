import { MACRO_NUTRIENTS } from './../core/edamam.constant';
import { IIngredient } from './../core/recipe.interface';
import { Component, OnInit } from '@angular/core';
import RecipeService from '../core/recipe.service';
import NutritionService from '../core/nutrition.service';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.scss']
})
export class RecipeDataComponent implements OnInit {
  public recipeIngredients: IIngredient[] = [];

  constructor(
    private recipeService: RecipeService,
    private nutritionService: NutritionService,
  ) { }

  ngOnInit() {
    this.recipeService.recipeIngredients$.subscribe((recipeIngredients) => {
      this.recipeIngredients = recipeIngredients;
    });
  }

  get totalNutrients () {
    return this.getTotalNutrients();
  }

  get totalCalories () {
    return this.nutritionService.getTotalCalories(this.recipeIngredients);
  }

  get totalWeight () {
    return this.nutritionService.getTotalWeight(this.recipeIngredients);
  }

  getTotalNutrients () {
    return MACRO_NUTRIENTS.map((nutrient) => {
      const totalQuantity = this.totalQuantityFor(nutrient);
      const totalDaily = this.totalDailyIntakeFor(nutrient);

      return {
        label: totalQuantity.label,
        totalQuantity: {
          ...totalQuantity,
        },
        totalDaily: {
          ...totalDaily,
        },
      };
    });
  }

  totalQuantityFor (nutrient) {
    return this.nutritionService.getTotalForNutrient(this.recipeIngredients, 'totalNutrients', nutrient, this.totalCalories);
  }

  totalDailyIntakeFor (nutrient) {
    return this.nutritionService.getTotalForNutrient(this.recipeIngredients, 'totalDaily', nutrient);
  }
}
