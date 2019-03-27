import { mount } from '@vue/test-utils';
import IngredientNutrients from '../ingredient-nutrients';

describe('Component: ingredient nutrients', () => {
  it('should match snapshot', () => {
    const wrapper = mount(IngredientNutrients, {
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
    expect(wrapper.html()).toMatchSnapshot();
  });
});
