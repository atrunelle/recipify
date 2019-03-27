import { CALORIES_PER_MACRO } from './nutrition.constant';
import { MACRO_NUTRIENTS } from './edamam.constant';

const nutritionService = {
  // TODO: move as getter?
  calculatePercentage (quantity, totalCalories, nutrient) {
    return Math.round(quantity * CALORIES_PER_MACRO[nutrient] / totalCalories * 100);
  },

  // TODO: move as getter?
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

  // TODO: move as getter?
  totalQuantityFor (nutrient, ingredients, totalCalories) {
    return nutritionService.getTotalForNutrient(ingredients, 'totalNutrients', nutrient, totalCalories);
  },

  // TODO: move as getter?
  totalDailyIntakeFor (nutrient, ingredients) {
    return nutritionService.getTotalForNutrient(ingredients, 'totalDaily', nutrient);
  },

  // TODO: move as getter?
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
  },
};

export default nutritionService;
