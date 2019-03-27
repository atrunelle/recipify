import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import RecipeCreator from '../recipe-creator';

describe('Component: recipe creator', () => {
  let localVue = createLocalVue();
  localVue.use(Vuex);

  const recipeActions = {
    removeIngredient: jest.fn(),
    removeAllIngredients: jest.fn(),
    saveRecipe: jest.fn(),
  };

  const recipeStore = {
    namespaced: true,
    state: {
      ingredients: [{
        name: 'carrot',
        nutrients: {
          totalNutrients: {
            FAT: {
              quantity: 5,
              unit: 'gr',
              label: 'Fat',
            },
            PROCNT: {
              quantity: 5,
              unit: 'gr',
              label: 'Fat',
            },
          },
          totalDaily: {
            FAT: {
              quantity: 5,
              unit: '%',
              label: 'Fat',
            },
            PROCNT: {
              quantity: 5,
              unit: '%',
              label: 'Fat',
            },
          },
        },
      }],
      totalNutrients: [],
      totalCalories: 0,
      totalWeight: 0,
    },
    actions: recipeActions,
  };

  const store = new Vuex.Store({
    modules: {
      recipe: recipeStore,
    },
  });

  it('should remove ingredient', () => {
    const wrapper = shallowMount(RecipeCreator, {
      localVue,
      store,
    });

    wrapper.find('[data-test="ingredient-details"]').vm.$emit('remove');
    expect(recipeActions.removeIngredient).toHaveBeenCalled();
  });

  it('should remove all ingredient', () => {
    const wrapper = shallowMount(RecipeCreator, {
      localVue,
      store,
    });

    wrapper.find('[data-test="remove-all"]').vm.$emit('click');
    expect(recipeActions.removeAllIngredients).toHaveBeenCalled();
  });

  it('should save recipe', () => {
    const wrapper = shallowMount(RecipeCreator, {
      localVue,
      store,
    });

    wrapper.find('[data-test="save-recipe"]').vm.$emit('click');
    expect(recipeActions.saveRecipe).toHaveBeenCalled();
  });
});
