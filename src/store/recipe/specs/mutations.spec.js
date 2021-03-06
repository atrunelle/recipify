import mutations from '../mutations';
import nutritionService from '@/core/nutrition.service';

describe('Store: recipe mutations', () => {
  it('should add ingredient to recipe ', () => {
    const state = {
      ingredients: [],
    };
    const ingredient = {
      name: 'carrot',
    };

    mutations.addIngredient(state, ingredient);
    expect(state.ingredients).toEqual([{
      name: 'carrot',
    }]);
  });

  it('should remove ingredient from recipe', () => {
    const state = {
      ingredients: [{
        name: 'carrot',
      }, {
        name: 'spinach',
      }, {
        name: 'potato',
      }],
    };

    mutations.removeIngredient(state, 1);
    expect(state.ingredients).toEqual(
      [{
        name: 'carrot',
      }, {
        name: 'potato',
      }]);
  });

  it('should remove all ingredient from recipe', () => {
    const state = {
      ingredients: [{
        name: 'carrot',
      }, {
        name: 'spinach',
      }, {
        name: 'potato',
      }],
    };

    mutations.removeAllIngredients(state);
    expect(state.ingredients).toEqual([]);
  });

  it('should save recipe from list of saved ingredients with default name', () => {
    const state = {
      ingredients: [{
        name: 'carrot',
      }, {
        name: 'spinach',
      }, {
        name: 'potato',
      }],
      recipes: [],
    };

    mutations.saveRecipe(state);
    expect(state.recipes).toEqual([{
      name: 'Recipe 1',
      ingredients: [{
        name: 'carrot',
      }, {
        name: 'spinach',
      }, {
        name: 'potato',
      }],
    }]);
  });

  it('should save recipe from list of saved ingredients with given name', () => {
    const state = {
      ingredients: [{
        name: 'carrot',
      }, {
        name: 'spinach',
      }, {
        name: 'potato',
      }],
      recipes: [],
    };

    mutations.saveRecipe(state, 'my recipe name');
    expect(state.recipes).toEqual([{
      name: 'my recipe name',
      ingredients: [{
        name: 'carrot',
      }, {
        name: 'spinach',
      }, {
        name: 'potato',
      }],
    }]);
  });
});
