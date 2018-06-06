import React from 'react';
import { shallow } from 'enzyme';
import IngredientsData from './IngredientsData';

describe('Component: IngredientsData', () => {
  it('should not render if totalNutrients props is not passed', () => {
    const component = shallow(<IngredientsData />);
    expect(component.html()).toBeNull();
  });

  it('should match snapshot', () => {
    const mockTotalNutrients = [{
      totalQuantity: [{
        label: 'Fat',
        quantity: 10,
        unit: 'gr',
      }],
      totalDaily: [{
        label: 'Fat',
        quantity: 50,
        unit: '%',
      }],
    }];
    const mockTotalCalories = 200
    const mockTotalWeight = 100;


    const component = shallow(
      <IngredientsData
      totalNutrients={mockTotalNutrients}
      totalCalories={mockTotalCalories}
      totalWeight={mockTotalWeight}/>);
    expect(component.html()).toMatchSnapshot();
  });
});