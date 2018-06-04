import { TestBed } from '@angular/core/testing';

import NutritionService from '@/recipe/nutrition.service';

describe('Service: NutritionService', () => {
  let service: NutritionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NutritionService ],
    });
    service = TestBed.get(NutritionService);
  });

  it('should calculate percentage of nutrients per total calories', () => {
    const quantity = 9;
    const totalCalories = 100;

    const results = service.calculatePercentage(quantity, totalCalories, 'FAT');
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

    expect(service.getTotalCalories(ingredients)).toBe(90);
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

    expect(service.getTotalWeight(ingredients)).toBe(765);
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

    const results = service.getTotalForNutrient(items, 'totalNutrients', 'FAT', 1000);

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

    const results = service.getTotalForNutrient(items, 'totalNutrients', 'FAT', 1000);

    expect(results).toEqual({
      label: '',
      quantity: 0,
      unit: '',
      percentage: 0,
    });
  });

  it(`should not calculate percentage of total calories is not passed`, () => {
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

    const results = service.getTotalForNutrient(items, 'totalNutrients', 'FAT');

    expect(results).toEqual({
      label: 'Fat',
      quantity: 17,
      unit: 'gr',
      percentage: 0,
    });
  });
});
