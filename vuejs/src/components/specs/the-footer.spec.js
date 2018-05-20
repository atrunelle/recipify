import { mount } from '@vue/test-utils';
import TheFooter from '../the-footer';

describe('Component: the footer', () => {
  let component;

  beforeEach(() => {
    component = mount(TheFooter);
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
