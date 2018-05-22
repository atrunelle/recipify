import getters from '../getters';

describe('Store: recipe getters', () => {
  it('should return recipe state', () => {
    const state = {
      ingredients: [{
        name: 'carrot',
      }],
    };
    expect(getters.getRecipe(state)).toEqual([{
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
});
