import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import RecipesList from '../recipes-list';

describe('Component: recipes list', () => {
  let localVue = createLocalVue();

  localVue.use(Vuex);

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
  };

  const store = new Vuex.Store({
    modules: {
      recipe: recipeStore,
    },
  });

  it('should match snapshot', () => {
    const wrapper = mount(RecipesList, {
      localVue,
      store,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
