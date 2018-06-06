import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Component: Footer', () => {
  it('should match snapshot', () => {
    const component = shallow(<Footer />);
    expect(component.html()).toMatchSnapshot();
  });
});