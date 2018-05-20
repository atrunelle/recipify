import { testAction } from 'test/unit/utils';
import actions from '../actions';

import recipeService from '@/core/recipe.service';

it('should trigger remove ingredients mutation ', (done) => {
  const payload = undefined;

  const state = {
    recipesIngredients: [{
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
    recipesIngredients: [],
  };

  const expectedMutations = [{
    type: 'addIngredient',
    payload: {
    },
  }];

  testAction(actions.addIngredient, payload, state, expectedMutations, done);
});

it('should trigger show alert mutation ', (done) => {
  recipeService.getIngredientNutrition = jest.fn(() => Promise.reject({
    message: 'my error',
  }));
  const payload = {
    ingredient: 'apple',
    numberOfServing: 1,
  };

  const state = {
    recipesIngredients: [],
  };

  const expectedMutations = [{
    type: 'app/showAlert',
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
    recipesIngredients: [],
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
    recipesIngredients: [],
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
    recipesIngredients: [],
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
    recipesIngredients: [],
    recipes: [],
  };

  const expectedMutations = [{
    type: 'app/showAlert',
    payload: undefined,
  }];

  testAction(actions.saveRecipe, payload, state, expectedMutations, done);
});
