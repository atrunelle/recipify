import { mount } from '@vue/test-utils';
import NutrientsMacroChart from '../nutrients-macro-chart';

describe('Component: nutrients chart', () => {
  let component;

  beforeEach(() => {
    component = mount(NutrientsMacroChart, {
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
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
