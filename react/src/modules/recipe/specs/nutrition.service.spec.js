import nutritionService from '../nutrition.service';

describe('Service: Nutrition', () => {
  it('should calculate percentage of nutrients per total calories', () => {
    const quantity = 9;
    const totalCalories = 100;

    const results = nutritionService.calculatePercentage(quantity, totalCalories, 'FAT');
    const expected = 81;

    expect(results).toBe(expected);
  });

  it('should get total calories for the whole recipe', () => {
    const ingredients = [{
      nutrients: {
        calories: 25,
      },
    }, {
      nutrients: {
        calories: 50,
      },
    }, {
      nutrients: {
        calories: 15,
      },
    }];

    expect(nutritionService.getTotalCalories(ingredients)).toBe(90);
  });

  it('should get total weight for the whole recipe', () => {
    const ingredients = [{
      nutrients: {
        totalWeight: 250,
      },
    }, {
      nutrients: {
        totalWeight: 500,
      },
    }, {
      nutrients: {
        totalWeight: 15,
      },
    }];

    expect(nutritionService.getTotalWeight(ingredients)).toBe(765);
  });

  it('should get total nutrient for recipe', () => {
    const items = [{
      nutrients: {
        totalNutrients: {
          FAT: {
            label: 'Fat',
            quantity: 2,
            unit: 'gr',
          },
        },
      },
    }, {
      nutrients: {
        totalNutrients: {
          FAT: {
            label: 'Fat',
            quantity: 10,
            unit: 'gr',
          },
        },
      },
    }, {
      nutrients: {
        totalNutrients: {
          FAT: {
            label: 'Fat',
            quantity: 5,
            unit: 'gr',
          },
        },
      },
    }];

    const results = nutritionService.getTotalForNutrient(items, 'totalNutrients', 'FAT', 1000);

    expect(results).toEqual({
      label: 'Fat',
      quantity: 17,
      unit: 'gr',
      percentage: 15,
    });
  });

  it(`should return defaults values if nutrient values don't exist`, () => {
    const items = [{
      nutrients: {
        totalNutrients: {
        },
      },
    }, {
      nutrients: {
        totalNutrients: {
        },
      },
    }, {
      nutrients: {
        totalNutrients: {
        },
      },
    }];

    const results = nutritionService.getTotalForNutrient(items, 'totalNutrients', 'FAT', 1000);

    expect(results).toEqual({
      label: '',
      quantity: 0,
      unit: '',
      percentage: 0,
    });
  });

  it('should get total nutrients', () => {
    const ingredients = [{
      nutrients: {
        totalNutrients: {
          FAT: {
            label: 'Fat',
            quantity: 100,
            unit: 'gr',
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 200,
            unit: 'gr',
          },
        },
        totalDaily: {
          FAT: {
            label: 'Fat',
            quantity: 20,
            unit: '%',
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 40,
            unit: '%',
          },
        },
      },
    }, {
      nutrients: {
        totalNutrients: {
          FAT: {
            label: 'Fat',
            quantity: 100,
            unit: 'gr',
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 200,
            unit: 'gr',
          },
        },
        totalDaily: {
          FAT: {
            label: 'Fat',
            quantity: 20,
            unit: '%',
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 40,
            unit: '%',
          },
        },
      },
    }];

    const totalNutrients = nutritionService.getTotalNutrients(ingredients, 1000);

    const expected = [
      {
        label: 'Carbs',
        totalQuantity: {
          label: 'Carbs',
          quantity: 400,
          unit: 'gr',
          percentage: 160,
        },
        totalDaily: {
          label: 'Carbs',
          quantity: 80,
          unit: '%',
          percentage: 0,
        },
      },
      {
        label: 'Fat',
        totalQuantity: {
          label: 'Fat',
          quantity: 200,
          unit: 'gr',
          percentage: 180,
        },
        totalDaily: {
          label: 'Fat',
          quantity: 40,
          unit: '%',
          percentage: 0,
        },
      },
      {
        label: '',
        totalQuantity: {
          label: '',
          quantity: 0,
          unit: '',
          percentage: 0,
        },
        totalDaily: {
          label: '',
          quantity: 0,
          unit: '',
          percentage: 0,
        },
      },
    ];

    expect(totalNutrients).toEqual(expected);
  });  
});
