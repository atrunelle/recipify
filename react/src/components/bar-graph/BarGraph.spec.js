import React from 'react';
import { mount } from 'enzyme';
import BarGraph from './BarGraph';

describe('Component: BarGraph', () => {
  it('should not render if percentage is 0', () => {
    const component = mount(
      <BarGraph
        label="Fat"
      />);
    expect(component.html()).toBeNull();
  });

  it('should match snapshot', () => {
    const component = mount(
      <BarGraph
        label="Fat"
        percentage={10}
      />);
    expect(component.html()).toMatchSnapshot();
  });
});