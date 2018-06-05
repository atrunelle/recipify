import { CALORIES_PER_MACRO } from './nutrition.constant';
import { MACRO_NUTRIENTS } from './edamam.constant';

const nutritionService = {

  calculatePercentage (quantity, totalCalories, nutrient) {
    return Math.round(quantity * CALORIES_PER_MACRO[nutrient] / totalCalories * 100);
  },

  getTotalCalories  (ingredients) {
    return ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.calories + sum;
    }, 0);
  },

  getTotalWeight (ingredients) {
    return ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.totalWeight + sum;
    }, 0);
  },

  getTotalForNutrient (items, totalKey, nutrient, totalCalories = 0) {
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
  },

  totalQuantityFor (nutrient, ingredients, totalCalories) {
    return nutritionService.getTotalForNutrient(ingredients, 'totalNutrients', nutrient, totalCalories);
  },

  totalDailyIntakeFor (nutrient, ingredients) {
    return nutritionService.getTotalForNutrient(ingredients, 'totalDaily', nutrient);
  },

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
};

export default nutritionService;