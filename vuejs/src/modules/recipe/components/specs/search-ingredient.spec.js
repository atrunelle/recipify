import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import SearchIngredient from '../search-ingredient';
import apiService from '@/core/api.service';

describe('Component: search ingredient', () => {
  let component;
  let vm;
  let localVue = createLocalVue();

  localVue.use(Vuex);

  const state = {
    recipeIngrdients: [],
  };

  const recipeActions = {
    addIngredient: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();

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

    component = mount(SearchIngredient, {
      stubs: {
        'v-text-field': '<input type="text">',
      },
      localVue,
      store,
    });

    vm = component.vm;
  });

  it('should add ingredients to recipe', (done) => {
    recipeActions.addIngredient.mockResolvedValue({});
    component.find('#search-ingredient-form').trigger('submit');
    component.setData({
      ingredient: 'apple',
      numberOfServing: 2,
    });

    expect(recipeActions.addIngredient).toHaveBeenCalled();
    vm.$nextTick(() => {
      expect(vm.isLoading).toBeFalsy();
      expect(vm.ingredient).toBe('');
      expect(vm.numberOfServing).toBe(1);
      done();
    });
  });

  it('should handle error', () => {
    recipeActions.addIngredient.mockRejectedValue(new Error({}));
    component.find('#search-ingredient-form').trigger('submit');

    vm.$nextTick().then(() => {
      expect(vm.isLoading).toBeFalsy();
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
