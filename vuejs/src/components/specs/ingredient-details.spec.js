import { mount } from '@vue/test-utils';
import IngredientDetails from '../ingredient-details';

describe('Component: nutrients chart', () => {
  it('should show ingredient name and detail', () => {
    const wrapper = mount(IngredientDetails, {
      propsData: {
        ingredient: {
          name: 'Chicken',
          nutrients: {
            calories: 200,
            totalWeight: 300,
            totalNutrients: {},
            dietLabels: [],
            healthLabels: [],
          },
        },
        index: 0,
      },
    });
    const ingredientDetail = wrapper.find('[data-test="ingredient-detail"]').text();
    expect(ingredientDetail).toBe('Chicken 200cal for 300gr');
  });

  it('should remove ingredient', () => {
    const wrapper = mount(IngredientDetails, {
      propsData: {
        ingredient: {
          name: 'Chicken',
          nutrients: {
            calories: 200,
            totalWeight: 300,
            totalNutrients: {},
            dietLabels: [],
            healthLabels: [],
          },
        },
        index: 0,
      },
    });

    wrapper.find('[data-test="remove-ingredient"]').trigger('click');
    expect(wrapper.emitted().remove[0]).toEqual([0]);
  });
});
