import React from 'react';
import { shallow } from 'enzyme';
import IngredientDetails from './IngredientDetails';

describe('Component: IngredientDetails', () => {
  let component;
  const mockRemove = jest.fn();

  beforeEach(() => {
    const mockIngredient = {
      name: 'Carrot',
      nutrients: {
        calories: 100,
        totalWeight: 260,
        totalNutrients: {},
        totalDaily: {},
        dietLabels: [],
        healthLabels: [],
      }
    };

    component = shallow(
      <IngredientDetails 
        ingredient={mockIngredient}
        remove={mockRemove}
        index={1}/>
    );
  });

  it('should remove ingredient', () => {
    component.find('#removeButton-1').simulate('click');
    expect(mockRemove).toHaveBeenCalledWith(1);
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});