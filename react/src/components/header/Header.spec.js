import React from 'react';
import { mount } from 'enzyme';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';
import Header from './Header';

describe('Component: Header', () => {
  const context = createRouterContext()
  const childContextTypes = {
    router: PropTypes.object,
  };
  
  it('should match snapshot', () => {
    const component = mount(
      <Header />,
      { context, childContextTypes },
  );
    expect(component.html()).toMatchSnapshot();
  });
});