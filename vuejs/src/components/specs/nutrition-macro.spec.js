import { mount } from '@vue/test-utils';
import NutritionMacro from '../nutrition-macro';

describe('Component: nutrients chart', () => {
  it('should match snapshot', () => {
    const wrapper = mount(NutritionMacro, {
      propsData: {
        totalNutrients: [{
          totalQuantity: {
            label: 'Protein',
            percentage: 50,
          },
        }, {
          totalQuantity: {
            label: 'Fat',
            percentage: 10,
          },
        }],
      },
    });
  });
});
