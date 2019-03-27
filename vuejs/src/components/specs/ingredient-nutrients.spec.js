import { mount } from '@vue/test-utils';
import IngredientNutrients from '../ingredient-nutrients';

describe('Component: ingredient nutrients', () => {
  let component;

  beforeEach(() => {
    component = mount(IngredientNutrients, {
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
