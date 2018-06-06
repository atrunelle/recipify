import React from 'react';
import { mount } from 'enzyme';
import SearchIngredient from './SearchIngredient';

describe('Component: SearchIngredient', () => {
  let component;

  const mockAdd = jest.fn();
  const mockIsFetching = false;

  beforeEach(() => {
    component = mount(
      <SearchIngredient
        add={mockAdd}
        isFetching={mockIsFetching}/>
    );
  });
  
  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});