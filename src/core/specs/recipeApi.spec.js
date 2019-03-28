import recipeApi from '../recipeApi';
import mockAxios from 'axios';

describe('Service: ingredients service', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should parse provided ingredient name', () => {
    recipeApi.parseIngredient('apple');

    expect(mockAxios.get).toHaveBeenCalled();
  });

  it('should get nutrients associated to ingredient', () => {
    const ingredient = {};

    recipeApi.getNutrients(ingredient);

    expect(mockAxios.post).toHaveBeenCalled();
  });

  describe('when formatting ingredients', () => {
    it('should return formatted ingredient even with missing data', () => {
      const data = {
        parsed: [{
          food: {
            uri: '/food/uri',
          },
        }],
      };

      expect(recipeApi.formatIngredients(data)).toEqual({
        yield: 1,
        ingredients: [{
          foodURI: '/food/uri',
        }],
      });
    });

    it('should return formatted ingredient', () => {
      const data = {
        parsed: [{
          food: {
            uri: '/food/uri',
          },
          quantity: 150,
          measure: {
            uri: '/measure/uri',
          },
        }],
      };

      expect(recipeApi.formatIngredients(data, 5)).toEqual({
        yield: 5,
        ingredients: [{
          quantity: 150,
          foodURI: '/food/uri',
          measureURI: '/measure/uri',
        }],
      });
    });
  });

  describe('when getting ingredient nutriton', () => {
    it('should get list of ingredients info from api', (done) => {
      recipeApi.parseIngredient = jest.fn(() => Promise.resolve({
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

      recipeApi.getIngredientNutrition('apple').then((results) => {
        expect(recipeApi.parseIngredient).toBeCalledWith('apple');
        expect(results).toEqual({
          name: 'Apple',
          nutrients: {},
        });
        done();
      });
    });

    it('should throw error', () => {
      recipeApi.parseIngredient = jest.fn(() => Promise.reject(new Error('I am an error')));

      expect(recipeApi.getIngredientNutrition('apple')).rejects.toEqual(new Error('I am an error'));
    });

    it('should throw error if data received are incorrect', () => {
      recipeApi.parseIngredient = jest.fn(() => Promise.resolve({
        parsed: [],
      }));

      recipeApi.getIngredientNutrition('apple').catch((error) => {
        expect(error).toEqual(new Error(`We couldn't find the food you entered. Please check the format and spelling. Example: 200gr chicken`));
      });
    });
  });

  // describe('when getting diet labels', () => {
  //   it('should return empty array if no items is passed', () => {
  //     expect(recipeApi.getDietLabels()).toEqual([]);
  //   });

  //   it('should return an array of labels for diet tags', () => {
  //     const items = ['LOW_FAT', 'LOW_SODIUM'];
  //     const results = recipeApi.getDietLabels(items);
  //     const expected = ['Low fat'];

  //     expect(results).toEqual(expected);
  //   });
  // });

  // describe('when getting health labels', () => {
  //   it('should return empty array if no items is passed', () => {
  //     expect(recipeApi.getHealthLabels()).toEqual([]);
  //   });

  //   it('should return an array of labels for health tags', () => {
  //     const items = ['VEGETARIAN', 'PESCATARIAN', 'DAIRY_FREE', 'LOW_FAT_ABS'];
  //     const results = recipeApi.getHealthLabels(items);
  //     const expected = ['Vegetarian', 'Pescatarian', 'Dairy free'];

  //     expect(results).toEqual(expected);
  //   });
  // });

  // it('should get list of macro nutrients to display', () => {
  //   const items = { SUGAR: {}, FAT: {} };

  //   const results = recipeApi.getMacroNutrientsList(items);
  //   const expected = { FAT: {} };

  //   expect(results).toEqual(expected);
  // });

  // it('should get list of micro nutrients to display', () => {
  //   const items = { SUGAR: {}, FAT: {} };

  //   const results = recipeApi.getMicroNutrientsList(items);
  //   const expected = { SUGAR: {} };

  //   expect(results).toEqual(expected);
  // });
});
