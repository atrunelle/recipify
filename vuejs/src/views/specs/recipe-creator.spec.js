import Vuex from 'vuex';

import { mount, createLocalVue } from '@vue/test-utils';
import getters from '@/modules/recipe/store/getters';

import RecipeCreator from '../recipe-creator';

describe('Component: recipe creator', () => {
  let component;
  let localVue = createLocalVue();
  localVue.use(Vuex);

  const recipeActions = {
    removeIngredient: jest.fn(),
    removeAllIngredients: jest.fn(),
    saveRecipe: jest.fn(),
  };

  beforeEach(() => {
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
      getters,
      actions: recipeActions,
    };

    const store = new Vuex.Store({
      modules: {
        recipe: recipeStore,
      },
    });
    component = mount(RecipeCreator, {
      stubs: {
        'ingredients-list': '<div></div>',
        'search-ingredient': '<div></div>',
      },
      localVue,
      store,
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
