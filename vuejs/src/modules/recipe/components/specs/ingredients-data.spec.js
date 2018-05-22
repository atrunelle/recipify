import { mount } from '@vue/test-utils';

import IngredientsDat from '../ingredients-data';

describe('Component: Ingredients data', () => {
  let component;

  beforeEach(() => {
    const ingredients = [{
      nutrients: {
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

    component = mount(IngredientsDat, {
      stubs: ['nutrients-macro-chart'],
      propsData: {
        ingredients,
      },
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
