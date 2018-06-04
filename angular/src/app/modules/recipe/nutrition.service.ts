import { MACRO_NUTRIENTS } from '@/modules/recipe/edamam.constant';
import { INutrientsValue } from './recipe.interface';
import { Injectable } from '@angular/core';
import { CALORIES_PER_MACRO } from './nutrition.constant';

@Injectable()

class NutritionService {
  calculatePercentage (quantity, totalCalories, nutrient): number {
    return Math.round(quantity * CALORIES_PER_MACRO[nutrient] / totalCalories * 100);
  }

  getTotalForNutrient (items, totalKey, nutrient, totalCalories = 0): INutrientsValue {
    return items
    .reduce((sum, ingredient) => {
      const nutrientTotal = ingredient.nutrients[totalKey][nutrient];

      if (!nutrientTotal) {
        return sum;
      }
      sum.label = nutrientTotal.label;
      sum.unit = nutrientTotal.unit;
      sum.quantity += nutrientTotal.quantity;

      if (totalCalories) {
        sum.percentage = this.calculatePercentage(sum.quantity, totalCalories, nutrient);
      }

      return sum;
    }, {
      label: '',
      quantity: 0,
      unit: '',
      percentage: 0,
    });
  }

  totalQuantityFor (nutrient, ingredients, totalCalories) {
    return this.getTotalForNutrient(ingredients, 'totalNutrients', nutrient, totalCalories);
  }

  totalDailyIntakeFor (nutrient, ingredients) {
    return this.getTotalForNutrient(ingredients, 'totalDaily', nutrient);
  }

  getTotalNutrients (ingredients, totalCalories) {
    return MACRO_NUTRIENTS.map((nutrient) => {
      const totalQuantity = this.totalQuantityFor(nutrient, ingredients, totalCalories);
      const totalDaily = this.totalDailyIntakeFor(nutrient, ingredients);

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
}

export default NutritionService;
