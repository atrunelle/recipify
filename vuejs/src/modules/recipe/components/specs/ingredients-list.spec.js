import Vuex from 'vuex';
import { shallow, createLocalVue } from '@vue/test-utils';
import IngredientsList from '../ingredients-list';
import getters from '@/modules/recipe/store/getters';

describe('Component: ingredients list', () => {
  let component;
  let localVue = createLocalVue();
  localVue.use(Vuex);

  const recipeActions = {
    removeIngredient: jest.fn(),
  };

  beforeEach(() => {
    const recipeStore = {
      namespaced: true,
      state: {
        recipeIngredients: [{
          name: 'carrot',
          nutrients: {
            calories: 100,
          },
        }, {
          name: 'spinach',
          nutrients: {
            calories: 100,
          },
        }, {
          name: 'carrot',
          nutrients: {
            calories: 100,
          },
        }],
      },
      getters,
      actions: recipeActions,
    };

    const store = new Vuex.Store({
      modules: {
        recipe: recipeStore,
      },
    });

    component = shallow(IngredientsList, {
      localVue,
      store,
    });
  });

  it('should remove ingredient', () => {
    component.find('#remove-ingredient-1').trigger('click');
    expect(recipeActions.removeIngredient).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
