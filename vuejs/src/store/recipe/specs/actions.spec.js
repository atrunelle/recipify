import { testAction } from 'test/unit/utils';
import actions from '../actions';

import recipeService from '../../recipe.service';

describe('Store: recipes actions', () => {
  it('should trigger remove ingredients mutation ', (done) => {
    const payload = undefined;

    const state = {
      ingredients: [{
        name: 'carrot',
      }],
    };

    const expectedMutations = [{
      type: 'removeIngredient',
    }];

    testAction(actions.removeIngredient, payload, state, expectedMutations, done);
  });

  it('should trigger add ingredients mutation ', (done) => {
    recipeService.getIngredientNutrition = jest.fn(() => Promise.resolve({
      name: 'carrot',
      nutrients: {},
    }));
    const payload = {
      ingredient: 'apple',
      numberOfServing: 1,
    };

    const state = {
      ingredients: [],
    };

    const expectedMutations = [{
      type: 'addIngredient',
      payload: {
      },
    }];

    testAction(actions.addIngredient, payload, state, expectedMutations, done);
  });

  it('should trigger show alert mutation ', (done) => {
    recipeService.getIngredientNutrition = jest.fn(() => Promise.reject(new Error('my-error')));
    const payload = {
      ingredient: 'apple',
      numberOfServing: 1,
    };

    const state = {
      ingredients: [],
    };

    const expectedMutations = [{
      type: 'showAlert',
      payload: {
        text: 'Error: my error',
        type: 'error',
      },
    }];

    testAction(actions.addIngredient, payload, state, expectedMutations, done);
  });

  it('should trigger remove all ingredients mutation ', (done) => {
    const payload = undefined;

    const state = {
      ingredients: [],
    };

    const expectedMutations = [{
      type: 'removeAllIngredients',
      payload: undefined,
    }];

    testAction(actions.removeAllIngredients, payload, state, expectedMutations, done);
  });

  it('should trigger save recipe mutation ', (done) => {
    const payload = 'recipe name';

    const state = {
      ingredients: [],
      recipes: [],
    };

    const expectedMutations = [{
      type: 'saveRecipe',
      payload: 'recipe name',
    }];

    testAction(actions.saveRecipe, payload, state, expectedMutations, done);
  });

  it('should trigger remove all ingredients mutation ', (done) => {
    const payload = undefined;

    const state = {
      ingredients: [],
    };

    const expectedMutations = [{
      type: 'removeAllIngredients',
      payload: undefined,
    }];

    testAction(actions.saveRecipe, payload, state, expectedMutations, done);
  });

  it('should trigger show alert mutation ', (done) => {
    const payload = undefined;

    const state = {
      ingredients: [],
      recipes: [],
    };

    const expectedMutations = [{
      type: 'showAlert',
      payload: undefined,
    }];

    testAction(actions.saveRecipe, payload, state, expectedMutations, done);
  });

  it('should trigger calculate total calories', (done) => {
    const payload = undefined;

    const state = {
      ingredients: [],
      totalNutrients: [],
      totalCalories: 0,
    };

    const expectedMutations = [{
      type: 'calculateTotalCalories',
      payload: undefined,
    }];

    testAction(actions.calculateTotalCalories, payload, state, expectedMutations, done);
  });

  it('should trigger calculate total weight', (done) => {
    const payload = undefined;

    const state = {
      ingredients: [],
      totalNutrients: [],
      totalWeight: 0,
    };

    const expectedMutations = [{
      type: 'calculateTotalWeight',
      payload: undefined,
    }];

    testAction(actions.calculateTotalWeight, payload, state, expectedMutations, done);
  });

  it('should trigger calculate total nutrients', (done) => {
    const payload = undefined;

    const state = {
      ingredients: [],
      totalNutrients: [],
      totalWeight: 0,
    };

    const expectedMutations = [{
      type: 'calculateTotalNutrients',
      payload: undefined,
    }];

    testAction(actions.calculateTotalNutrients, payload, state, expectedMutations, done);
  });
});
