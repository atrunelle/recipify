import { mount } from '@vue/test-utils';
import IngredientNutrients from '../ingredient-nutrients';

describe('Component: ingredient nutrients', () => {
  it('should display macro labels', () => {
    const wrapper = mount(IngredientNutrients, {
      propsData: {
        nutrients: {
          dietLabels: [ 'LOW_FAT' ],
          healthLabels: [ 'VEGAN' ],
          totalNutrients: {
            PROCNT: {
              label: 'Protein',
              quantity: 2.45454,
              unit: 'gr',
            },
            FAT: {
              label: 'Fat',
              quantity: 1,
              unit: 'g',
            },
          },
        },
      },
    });

    const macroLabels = wrapper.findAll('[data-test="macro-labels"]');
    expect(macroLabels.length).toBe(2);
    expect(macroLabels.at(0).text()).toContain('Protein');
    expect(macroLabels.at(0).text()).toContain('2.45g');
    expect(macroLabels.at(1).text()).toContain('Fat');
    expect(macroLabels.at(1).text()).toContain('1.00g');
  });

  it('should display macro labels', () => {
    const wrapper = mount(IngredientNutrients, {
      propsData: {
        nutrients: {
          dietLabels: [ 'LOW_FAT', 'LOW_SODIUM' ],
          healthLabels: [ 'VEGAN', 'LOW_FAT_ABS', 'PESCATARIAN', 'EGG_FREE' ],
          totalNutrients: {
            PROTEIN: {
              label: 'Protein',
              quantity: 2.45454,
              unit: 'gr',
            },
            FAT: {
              label: '',
              quantity: 0,
              unit: '',
            },
          },
        },
      },
    });

    const allLabels = wrapper.findAll('[data-test="all-labels"]');
    expect(allLabels.length).toBe(4);
    expect(allLabels.at(0).text()).toBe('Low fat');
    expect(allLabels.at(1).text()).toBe('Vegan');
    expect(allLabels.at(2).text()).toBe('Pescatarian');
    expect(allLabels.at(3).text()).toBe('Egg free');
  });
});
