import { mount } from '@vue/test-utils';
import NutritionMacro from '../nutrition-macro';

describe('Component: nutrients chart', () => {
  let component;

  beforeEach(() => {
    component = mount(NutritionMacro, {
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

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
