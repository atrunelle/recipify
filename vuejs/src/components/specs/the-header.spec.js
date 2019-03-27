import { shallowMount } from '@vue/test-utils';
import TheHeader from '../the-header';

describe('Component: the header', () => {
  it('should match snapshot', () => {
    const wrapper = shallowMount(TheHeader);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
