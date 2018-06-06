import React from 'react';
import { shallow } from 'enzyme';
import IngredientsList from './IngredientsList';

describe('Component: IngredientsList', () => {
  it('should not render if no ingredients props is passed', () => {
    const component = shallow(<IngredientsList />);
    expect(component.html()).toMatchSnapshot();
  });

  describe('when ingredients prop is passed', () => {
    let component;
    const mockSave = jest.fn();
    const mockRemoveAll = jest.fn();
    const mockIngredients = [{
      name: 'Carrot',
      nutrients: {
        calories: 100,
        totalWeight: 260,
        totalNutrients: {},
        totalDaily: {},
        dietLabels: [],
        healthLabels: [],
      },
    }];

    beforeEach(() => {
      component = shallow(
        <IngredientsList 
          ingredients={mockIngredients}
          save={mockSave}
          removeAll={mockRemoveAll}/>);      
    });
    
    it('should match snapshot', () => {
      expect(component.html()).toMatchSnapshot();
    });
  });
});