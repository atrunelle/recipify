import { mount } from '@vue/test-utils';
import NutrientsChart from '../nutrients-chart';

describe('Component: nutrients chart', () => {
  let component;

  beforeEach(() => {
    component = mount(NutrientsChart, {
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

  it('should redraw if nutrion data change', () => {
    component.vm.drawChart = jest.fn();

    component.setData({
      nutritionData: [{
        totalQuantity: {
          label: 'Protein',
          percentage: 40,
        },
      }, {
        totalQuantity: {
          label: 'Fat',
          percentage: 20,
        },
      }],
    });
    expect(component.vm.drawChart).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
