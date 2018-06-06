import React from 'react';
import { shallow } from 'enzyme';
import NutritionMacro from './NutritionMacro';

describe('Component: NutritionMacro', () => {
  it('should not render if totalNutrients is not passed', () => {
    const component = shallow(<NutritionMacro />);
    expect(component.html()).toBeNull();
  });

  it('should match snapshot', () => {
    const mockTotalNutrients = [{
      totalQuantity: {
        label: 'Fat',
        quantity: 10,
        percentage: 12,
        unit: 'gr',
      },
    }];

    const component = shallow(
      <NutritionMacro totalNutrients={mockTotalNutrients}/>
    );
    expect(component.html()).toMatchSnapshot();
  });

});