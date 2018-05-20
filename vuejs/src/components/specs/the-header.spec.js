import { mount } from '@vue/test-utils';
import TheHeader from '../the-header';

describe('Component: the header', () => {
  let component;

  beforeEach(() => {
    component = mount(TheHeader, {
      stubs: {
        'the-menu': '<nav></nav>',
      },
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
