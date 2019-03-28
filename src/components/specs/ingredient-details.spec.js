import { mount } from '@vue/test-utils';
import IngredientsDetails from '../ingredients-details';

describe('Component: nutrients chart', () => {
  it('should show ingredient name and detail', () => {
    const wrapper = mount(IngredientsDetails, {
      propsData: {
        ingredients: [{
          name: 'Chicken',
          nutrients: {
            calories: 200,
            totalWeight: 300,
            totalNutrients: {},
            dietLabels: [],
            healthLabels: [],
          },
        }],
      },
    });
    const ingredientDetail = wrapper.find('[data-test="ingredient-detail"]').text();
    expect(ingredientDetail).toBe('Chicken 200cal for 300gr');
  });

  it('should remove ingredient', () => {
    const wrapper = mount(IngredientsDetails, {
      propsData: {
        ingredients: [{
          name: 'Chicken',
          nutrients: {
            calories: 200,
            totalWeight: 300,
            totalNutrients: {},
            dietLabels: [],
            healthLabels: [],
          },
        }, {
          name: 'Spinach',
          nutrients: {
            calories: 150,
            totalWeight: 400,
            totalNutrients: {},
            dietLabels: [],
            healthLabels: [],
          },
        }],
      },
    });

    wrapper.find('[data-test="remove-ingredient-1"]').trigger('click');
    expect(wrapper.emitted().remove[0]).toEqual([1]);
  });
});
