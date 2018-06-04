import mutations from '../mutations';
import nutritionService from '../../nutrition.service';

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

  it('should calculate total calories for the whole recipe', () => {
    const state = {
      ingredients: [{
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
      }],
    };

    mutations.calculateTotalCalories(state);
    expect(state.totalCalories).toBe(90);
  });

  it('should calculate total weight for the whole recipe', () => {
    const state = {
      ingredients: [{
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
      }],
    };

    mutations.calculateTotalWeight(state);
    expect(state.totalWeight).toBe(765);
  });

  describe('when calculating total nutrients', () => {
    it('should reset if there is no ingredients', () => {
      const state = {
        ingredients: [],
        totalNutrients: [{}, {}, {}],
      };

      mutations.calculateTotalNutrients(state);
      expect(state.totalNutrients).toEqual([]);
    });

    it('should ', () => {
      nutritionService.getTotalNutrients = jest.fn();

      const state = {
        ingredients: [{}, {}],
        totalCalories: 200,
        totalNutrients: [],
      };

      mutations.calculateTotalNutrients(state);
      expect(nutritionService.getTotalNutrients).toHaveBeenCalledWith(state.ingredients, 200);
    });
  });

  it('should reset total weight', () => {
    const state = {
      totalWeight: 765,
    };

    mutations.resetTotalWeight(state);
    expect(state.totalWeight).toBe(0);
  });

  it('should reset total calories', () => {
    const state = {
      totalCalories: 500,
    };

    mutations.resetTotalCalories(state);
    expect(state.totalCalories).toBe(0);
  });

  it('should reset total nutrients', () => {
    const state = {
      totalNutrients: [{}, {}, {}],
    };

    mutations.resetTotalNutrients(state);
    expect(state.totalNutrients).toEqual([]);
  });
});
