import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import RecipesList from '../recipes-list';
import getters from '@/modules/recipe/store/getters';

describe('Component: recipes list', () => {
  let component;
  let localVue = createLocalVue();

  localVue.use(Vuex);

  beforeEach(() => {
    const recipeStore = {
      namespaced: true,
      state: {
        recipes: [{
          name: 'recipe 1',
          ingredients: [{
            name: 'apple',
            nutrients: {
              calories: 100,
              totalWeight: 200,
            },
          }],
        },
        ],
      },
      getters,
    };

    const store = new Vuex.Store({
      modules: {
        recipe: recipeStore,
      },
    });

    component = mount(RecipesList, {
      localVue,
      store,
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
