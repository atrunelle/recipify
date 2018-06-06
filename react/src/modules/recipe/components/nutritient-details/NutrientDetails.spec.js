import React from 'react';
import { shallow } from 'enzyme';
import NutrientDetails from './NutrientDetails';

describe('Component: NutrientDetails', () => {
  it('should not render is no nutrient is passed as prop', () => {
    const component = shallow(<NutrientDetails />);
    expect(component.html()).toBeNull();
  });

  it('should match snapshot', () => {
    const mockNutrient = {
      totalQuantity: {
        label: 'Fat',
        quantity: 100,
        unit: 'gr',
      },
      totalDaily: {
        label: 'Fat',
        quantity: 10,
        unit: '%',
      },
    };

    const component = shallow(<NutrientDetails nutrient={mockNutrient} />);
    expect(component.html()).toMatchSnapshot();
  });
});