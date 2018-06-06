import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import RecipeCreator from './RecipeCreator';

describe('Component: RecipeCreator', () => {
  const initialState = {
    ingredients: [],
    totalNutrients: [],
    totalCalories: 0,
    totalWeight: 0,
  };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should match snapshot', () => {
    const component = mount(<Provider store={store}>
      <RecipeCreator />
    </Provider>);
    expect(component.html()).toMatchSnapshot();
  });
});