import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import SearchIngredient from '../search-ingredient';

describe('Component: search ingredient', () => {
  let localVue = createLocalVue();

  localVue.use(Vuex);

  const state = {
    recipeIngrdients: [],
  };

  const recipeActions = {
    addIngredient: jest.fn(),
  };

  const recipeStore = {
    namespaced: true,
    state,
    actions: recipeActions,
  };

  const store = new Vuex.Store({
    modules: {
      recipe: recipeStore,
    },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add ingredients to recipe', async (done) => {
    const wrapper = mount(SearchIngredient, {
      stubs: {
        'v-text-field': '<input type="text">',
      },
      localVue,
      store,
    });
    recipeActions.addIngredient.mockResolvedValue({});
    wrapper.find('#search-ingredient-form').trigger('submit');
    wrapper.setData({
      ingredient: 'apple',
      numberOfServing: 2,
    });

    expect(recipeActions.addIngredient).toHaveBeenCalled();
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[data-test="ingredient"]').element.value).toBe('');
    expect(wrapper.find('[data-test="number-servings"]').element.value).toBe('1');
    done();
  });

  it('should handle error', async () => {
    const wrapper = mount(SearchIngredient, {
      stubs: {
        'v-text-field': '<input type="text">',
      },
      localVue,
      store,
    });
    recipeActions.addIngredient.mockRejectedValue(new Error({}));
    wrapper.find('#search-ingredient-form').trigger('submit');

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isLoading).toBeFalsy();
  });

  it('should match snapshot', () => {
    const wrapper = mount(SearchIngredient, {
      stubs: {
        'v-text-field': '<input type="text">',
      },
      localVue,
      store,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
