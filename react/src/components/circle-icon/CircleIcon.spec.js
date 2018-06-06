import React from 'react';
import { shallow } from 'enzyme';
import CircleIcon from './CircleIcon';

describe('Component: CircleIcon', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <CircleIcon
        icon="'icon'"
        alt="'alt text"
      />
    );
    expect(component.html()).toMatchSnapshot();
  });
});