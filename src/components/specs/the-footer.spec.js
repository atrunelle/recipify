import { mount } from '@vue/test-utils';
import TheFooter from '../the-footer';

describe('Component: the footer', () => {
  it('should match snapshot', () => {
    const wrapper = mount(TheFooter);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
