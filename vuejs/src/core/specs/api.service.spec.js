import apiService from '../api.service';
import mockAxios from 'axios';

describe('Service: api service', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should parse provided ingredient name', () => {
    apiService.parseIngredient('apple');

    expect(mockAxios.get).toHaveBeenCalledWith('/api/food-database/parser?ingr=apple&app_id=123&app_key=abc');
  });

  it('should get nutrients associated to ingredient', () => {
    const ingredient = {};

    apiService.getNutrients(ingredient);

    expect(mockAxios.post).toHaveBeenCalledWith('/api/food-database/nutrients?app_id=123&app_key=abc', {});
  });
});
