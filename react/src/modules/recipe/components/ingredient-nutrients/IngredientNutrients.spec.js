import React from 'react';
import { shallow } from 'enzyme';
import IngredientNutrients from './IngredientNutrients';

describe('Component: IngredientNutrients', () => {
  it('should not render if nutrients prop is not passed', () => {
    const component = shallow(
      <IngredientNutrients/>);
    expect(component.html()).toBeNull();
  });

  it('should match snapshot', () => {
    const mockNutrients = {
      totalNutrients: {
        FAT: {
          label:'Fat',
          quantity: 13.4,
          unit: 'gr',
        },
      },
      dietLabels: ['LOW_FAT', 'LOW_CARB'],
      healthLabels: ['VEGETARIAN', 'VEGAN'],
    };
    
    const component = shallow(<IngredientNutrients nutrients={mockNutrients}/>);
    expect(component.html()).toMatchSnapshot();
  });
});