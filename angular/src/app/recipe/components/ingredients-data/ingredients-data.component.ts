import { INutrientDataList } from './../../recipe.interface';
import { MACRO_NUTRIENTS } from '@/recipe/edamam.constant';
import { IIngredient } from '@/recipe/recipe.interface';
import { Component, OnInit, Input } from '@angular/core';
import NutritionService from '@/recipe/nutrition.service';

@Component({
  selector: 'app-ingredients-data',
  templateUrl: './ingredients-data.component.html',
  styleUrls: ['./ingredients-data.component.scss']
})
export class IngredientsDataComponent implements OnInit {
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

  get totalCalories (): number {
    return this.nutritionService.getTotalCalories(this.ingredients);
  }

  get totalWeight (): number {
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

  totalQuantityFor (nutrient): INutrientDataList {
    return this.nutritionService.getTotalForNutrient(this.ingredients, 'totalNutrients', nutrient, this.totalCalories);
  }

  totalDailyIntakeFor (nutrient): INutrientDataList {
    return this.nutritionService.getTotalForNutrient(this.ingredients, 'totalDaily', nutrient);
  }
}
