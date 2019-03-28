import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import RecipesList from '../recipes-list';

describe('Component: recipes list', () => {
  let localVue = createLocalVue();

  localVue.use(Vuex);

  it('should display list of recipes', () => {
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
        }],
      },
    };

    const store = new Vuex.Store({
      modules: {
        recipe: recipeStore,
      },
    });
    const wrapper = mount(RecipesList, {
      localVue,
      store,
    });

    expect(wrapper.text()).toContain('recipe 1');
  });

  it('should display empty state', () => {
    const recipeStore = {
      namespaced: true,
      state: {
        recipes: [],
      },
    };

    const store = new Vuex.Store({
      modules: {
        recipe: recipeStore,
      },
    });
    const wrapper = mount(RecipesList, {
      stubs: ['router-link'],
      localVue,
      store,
    });

    expect(wrapper.text()).toContain('No recipes yet');
  });
});
