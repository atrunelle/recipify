import recipeService from '../recipe.service';
import apiService from '../api.service';

describe('Service: ingredients service', () => {
  it('should get list of ingredients info from api', (done) => {
    apiService.parseIngredient = jest.fn(() => Promise.resolve({
      parsed: [{
        food: {
          label: 'Apple',
          uri: 'http://food/uri',
        },
        measure: {
          uri: 'http://measure/uri',
        },
        quantity: 10,
      }],
    }));

    recipeService.getIngredientNutrition('apple').then((results) => {
      expect(apiService.parseIngredient).toBeCalledWith('apple');
      expect(results).toEqual({
        name: 'Apple',
        nutrients: {},
      });
      done();
    });
  });

  it('should throw error', () => {
    apiService.parseIngredient = jest.fn(() => Promise.reject({
      response: {
        data: {
          message: 'I am an error',
        },
      },
    }));

    expect(recipeService.getIngredientNutrition('apple')).rejects.toBe('I am an error');
  });

  describe('when getting diet labels', () => {
    it('should return empty array if no items is passed', () => {
      expect(recipeService.getDietLabels()).toEqual([]);
    });

    it('should return an array of labels for diet tags', () => {
      const items = ['LOW_FAT', 'LOW_SODIUM'];
      const results = recipeService.getDietLabels(items);
      const expected = ['Low fat'];

      expect(results).toEqual(expected);
    });
  });

  describe('when getting health labels', () => {
    it('should return empty array if no items is passed', () => {
      expect(recipeService.getHealthLabels()).toEqual([]);
    });

    it('should return an array of labels for health tags', () => {
      const items = ['VEGETARIAN', 'PESCATARIAN', 'DAIRY_FREE', 'LOW_FAT_ABS'];
      const results = recipeService.getHealthLabels(items);
      const expected = ['Vegetarian', 'Pescatarian', 'Dairy free'];

      expect(results).toEqual(expected);
    });
  });

  it('should get list of macro nutrients to display', () => {
    const items = { SUGAR: {}, FAT: {} };

    const results = recipeService.getMacroNutrientsList(items);
    const expected = { FAT: {} };

    expect(results).toEqual(expected);
  });

  it('should get list of micro nutrients to display', () => {
    const items = { SUGAR: {}, FAT: {} };

    const results = recipeService.getMicroNutrientsList(items);
    const expected = { SUGAR: {} };

    expect(results).toEqual(expected);
  });
});
