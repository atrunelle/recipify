import { CALORIES_PER_MACRO } from './nutrition.constant';
import { MACRO_NUTRIENTS } from './edamam.constant';

const nutritionService = {
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
          sum.percentage = Math.round(sum.quantity * CALORIES_PER_MACRO[nutrient] / totalCalories * 100);
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
        totalQuantity,
        totalDaily,
      };
    });
  },
};

export default nutritionService;
