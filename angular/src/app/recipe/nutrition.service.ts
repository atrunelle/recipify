import { INutrientsValue } from './recipe.interface';
import { Injectable } from '@angular/core';
import { CALORIES_PER_MACRO } from './nutrition.constant';

@Injectable()

class NutritionService {
  calculatePercentage (quantity, totalCalories, nutrient): number {
    return Math.round(quantity * CALORIES_PER_MACRO[nutrient] / totalCalories * 100);
  }

  getTotalCalories  (ingredients): number {
    return ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.calories + sum;
    }, 0);
  }

  getTotalWeight (ingredients): number {
    return ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.totalWeight + sum;
    }, 0);
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
}

export default NutritionService;
