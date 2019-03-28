import { mount } from '@vue/test-utils';
import NutrientsMacroChart from '../nutrients-macro-chart';

describe('Component: nutrients chart', () => {
  it('should match snapshot', () => {
    const wrapper = mount(NutrientsMacroChart, {
      propsData: {
        nutritionData: [{
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
    expect(wrapper.html()).toMatchSnapshot();
  });
});
