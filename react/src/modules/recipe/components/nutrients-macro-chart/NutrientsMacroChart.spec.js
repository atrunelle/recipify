import React from 'react';
import { shallow } from 'enzyme';
import NutrientsMacroChart from './NutrientsMacroChart';

describe('Component: NutrientsMacroChart', () => {
  it('should not render if nutritionData prop is not passed', () => {
    const component = shallow(<NutrientsMacroChart />);
    expect(component.html()).toBeNull();
  });

  it('should match snapshot', () => {
    const mockNutritionData = [{
      totalQuantity: {
        label: 'Fat',
        quantity: 10,
        percentage: 12,
        unit: 'gr',
      },
    }];

    const component = shallow(
      <NutrientsMacroChart nutritionData={mockNutritionData}/>
    );
    expect(component.html()).toMatchSnapshot();
  });
});