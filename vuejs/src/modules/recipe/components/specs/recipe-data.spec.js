import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';

import RecipeData from '../recipe-data';
import getters from '@/modules/recipe/store/getters';

describe('Component: Recipe data', () => {
  let component;
  let localVue = createLocalVue();

  localVue.use(Vuex);

  beforeEach(() => {
    const recipeStore = {
      namespaced: true,
      state: {
        recipeIngredients: [{
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
      },
      getters,
    };

    const store = new Vuex.Store({
      modules: {
        recipe: recipeStore,
      },
    });

    component = mount(RecipeData, {
      stubs: ['nutrients-chart'],
      localVue,
      store,
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
