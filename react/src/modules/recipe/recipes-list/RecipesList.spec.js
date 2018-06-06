import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';

import RecipesList from './RecipesList';

describe('Component: RecipesList', () => {
  const initialState = {
    recipes: {
      recipes: [],
    },
  };
  const mockStore = configureStore();
  let store;
  const context = createRouterContext()
  const childContextTypes = {
    router: PropTypes.object,
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should match snapshot', () => {
    const component = mount(
      <Provider store={store}>
        <RecipesList />
      </Provider>,
      { context, childContextTypes },
    );
    expect(component.html()).toMatchSnapshot();
  });
});