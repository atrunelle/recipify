import { mount } from '@vue/test-utils';

import IngredientsDat from '../ingredients-data';

describe('Component: Ingredients data', () => {
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
      quantity: 200,
      percentage: 10,
      unit: 'gr',
    },
    totalDaily: {
      label: 'Fat',
      quantity: 40,
      unit: '%',
    },
  }];

  it('should display the right ingredient data', () => {
    const wrapper = mount(IngredientsDat, {
      stubs: ['nutrients-macro-chart'],
      propsData: {
        totalNutrients,
        totalCalories: 120,
        totalWeight: 100,
      },
    });
    const nutrients = wrapper.findAll('[data-test="nutrients-list"]');
    expect(nutrients.at(0).text()).toContain('100.00gr');
    expect(nutrients.at(0).text()).toContain('20.00%');
    expect(nutrients.at(1).text()).toContain('200.00gr');
    expect(nutrients.at(1).text()).toContain('40.00%');
    expect(wrapper.find('[data-test="total-calories"]').text()).toBe('Calories: 120cal');
    expect(wrapper.find('[data-test="total-weight"]').text()).toBe('Total Weight: 100gr');
  });
});
