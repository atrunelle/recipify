import { MACRO_NUTRIENTS } from '@/recipe/edamam.constant';
import { IIngredient } from '@/recipe/recipe.interface';
import { Component, OnInit, Input } from '@angular/core';
import NutritionService from '@/recipe/nutrition.service';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.scss']
})
export class RecipeDataComponent implements OnInit {
  @Input()
  public ingredients: IIngredient[];

  constructor(
    private nutritionService: NutritionService,
  ) { }

  ngOnInit() {
  }

  get totalNutrients () {
    return this.getTotalNutrients();
  }

  get totalCalories () {
    return this.nutritionService.getTotalCalories(this.ingredients);
  }

  get totalWeight () {
    return this.nutritionService.getTotalWeight(this.ingredients);
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
    return this.nutritionService.getTotalForNutrient(this.ingredients, 'totalNutrients', nutrient, this.totalCalories);
  }

  totalDailyIntakeFor (nutrient) {
    return this.nutritionService.getTotalForNutrient(this.ingredients, 'totalDaily', nutrient);
  }
}
