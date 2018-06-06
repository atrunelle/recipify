import React from 'react';
import { shallow } from 'enzyme';
import RecipeDetails from './RecipeDetails';

describe('Component: RecipeDetails', () => {
  it('should not render if no recipe is passed as prop', () => {
    const component = shallow(<RecipeDetails />);
    expect(component.html()).toBeNull();
  });

  it('should match snapshot', () => {
    const mockRecipe = {
      name: 'My recipe',
      ingredients: [{
        name: 'carrot',
      }, {
        name: 'spinach',
      }],
    };
    const component = shallow(<RecipeDetails recipe={mockRecipe}/>);
    expect(component.html()).toMatchSnapshot();
  });
});