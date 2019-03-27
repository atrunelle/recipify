import { mount } from '@vue/test-utils';

import IngredientsDat from '../ingredients-data';

describe('Component: Ingredients data', () => {
  let component;

  beforeEach(() => {
    const totalNutrients = [{
      totalQuantity: {
        label: 'Protein',
        quantity: 100,
        percentage: 50,
        unit: 'gr',
      },
      totalDaily: {
        label: 'Protein',
        quantity: 20,
        unit: '%',
      },
    }, {
      totalQuantity: {
        label: 'Fat',
        quantity: 100,
        percentage: 10,
        unit: 'gr',
      },
      totalDaily: {
        label: 'Fat',
        quantity: 40,
        unit: '%',
      },
    }];

    component = mount(IngredientsDat, {
      stubs: ['nutrients-macro-chart'],
      propsData: {
        totalNutrients,
        totalCalories: 120,
        totalWeight: 100,
      },
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
