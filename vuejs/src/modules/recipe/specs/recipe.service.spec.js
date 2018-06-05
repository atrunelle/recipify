import recipeService from '../recipe.service';
import mockAxios from 'axios';

describe('Service: ingredients service', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should parse provided ingredient name', () => {
    recipeService.parseIngredient('apple');

    expect(mockAxios.get).toHaveBeenCalledWith('/api/food-database/parser?ingr=apple&app_id=123&app_key=abc');
  });

  it('should get nutrients associated to ingredient', () => {
    const ingredient = {};

    recipeService.getNutrients(ingredient);

    expect(mockAxios.post).toHaveBeenCalledWith('/api/food-database/nutrients?app_id=123&app_key=abc', {});
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

      expect(recipeService.formatIngredients(data)).toEqual({
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

      expect(recipeService.formatIngredients(data, 5)).toEqual({
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
      recipeService.parseIngredient = jest.fn(() => Promise.resolve({
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
        expect(recipeService.parseIngredient).toBeCalledWith('apple');
        expect(results).toEqual({
          name: 'Apple',
          nutrients: {},
        });
        done();
      });
    });

    it('should throw error', () => {
      recipeService.parseIngredient = jest.fn(() => Promise.reject(new Error('I am an error')));

      expect(recipeService.getIngredientNutrition('apple')).rejects.toEqual(new Error('I am an error'));
    });

    it('should throw error if data received are incorrect', () => {
      recipeService.parseIngredient = jest.fn(() => Promise.resolve({
        parsed: [],
      }));

      recipeService.getIngredientNutrition('apple').catch((error) => {
        expect(error).toEqual(new Error(`We couldn't find the food you entered. Please check the format and spelling. Example: 200gr chicken`));
      });
    });
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
