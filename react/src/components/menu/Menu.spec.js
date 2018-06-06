import React from 'react';
import { mount } from 'enzyme';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';
import Menu from './Menu';

it('should match snapshot', () => {
  const context = createRouterContext()
  const childContextTypes = {
    router: PropTypes.object,
  };
  
  describe('Component: Menu', () => {
    const component = mount(
      <Menu />,
      { context, childContextTypes },
    );
    expect(component.html()).toMatchSnapshot();
  });
});