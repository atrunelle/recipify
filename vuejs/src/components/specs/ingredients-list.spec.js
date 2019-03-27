import { mount } from '@vue/test-utils';

import IngredientsList from '../ingredients-list';

describe('Component: ingredients list', () => {
  let component;

  const removeIngredient = jest.fn();
  const removeAllIngredients = jest.fn();
  const saveRecipe = jest.fn();

  beforeEach(() => {
    const ingredients = [{
      name: 'carrot',
      nutrients: {
        dietLabels: [],
        healthLabels: [],
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
    }];

    component = mount(IngredientsList, {
      stubs: {
        'v-text-field': '<input type="text">',
      },
      propsData: {
        ingredients,
        save: saveRecipe,
        remove: removeIngredient,
        removeAll: removeAllIngredients,
      },
    });
  });

  it('should remove ingredient', () => {
    component.find('#remove-button-0').trigger('click');
    expect(removeIngredient).toHaveBeenCalled();
  });

  it('should remove ingredient', () => {
    component.find('#remove-all-button').trigger('click');
    expect(removeAllIngredients).toHaveBeenCalled();
  });

  it('should remove ingredient', () => {
    component.find('#save-button').trigger('click');
    expect(saveRecipe).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
