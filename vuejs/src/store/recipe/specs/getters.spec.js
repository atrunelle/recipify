import getters from '../getters';

describe('Store: recipe getters', () => {
  it('should return ingredients state', () => {
    const state = {
      ingredients: [{
        name: 'carrot',
      }],
    };
    expect(getters.getIngredients(state)).toEqual([{
      name: 'carrot',
    }]);
  });

  it('should return list of recipes state', () => {
    const state = {
      recipes: [{
        name: 'carrot recipes',
        ingredients: [{
          name: 'carrot',
        }],
      }],
    };
    expect(getters.getRecipes(state)).toEqual([{
      name: 'carrot recipes',
      ingredients: [{
        name: 'carrot',
      }],
    }]);
  });

  it('should return total nutrients state', () => {
    const state = {
      totalNutrients: [{
        totalQuantity: {
          label: 'Fat',
        },
        totalDaily: {
          label: 'Fat',
        },
      }],
    };
    expect(getters.getTotalNutrients(state)).toEqual([{
      totalQuantity: {
        label: 'Fat',
      },
      totalDaily: {
        label: 'Fat',
      },
    }]);
  });

  it('should return total weight state', () => {
    const state = {
      totalWeight: 100,
    };
    expect(getters.getTotalWeight(state)).toEqual(100);
  });

  it('should return total calories state', () => {
    const state = {
      totalCalories: 150,
    };
    expect(getters.getTotalCalories(state)).toEqual(150);
  });
});
