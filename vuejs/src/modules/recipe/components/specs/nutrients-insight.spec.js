import { mount } from '@vue/test-utils';
import NutrientsInsight from '../nutrients-insight';

describe('Component: nutrient insight', () => {
  let component;

  beforeEach(() => {
    component = mount(NutrientsInsight, {
      propsData: {
        nutrients: {
          dietLabels: [ 'LOW_FAT' ],
          healthLabels: [ 'VEGAN' ],
          totalNutrients: {
            PROTEIN: {
              label: 'Protein',
              quantity: 2.45454,
              unit: 'gr',
            },
          },
        },
      },
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
