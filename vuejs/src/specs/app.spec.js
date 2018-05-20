import { mount } from '@vue/test-utils';
import App from '../app';

describe('Component: app', () => {
  let component;

  beforeEach(() => {
    component = mount(App, {
      stubs: {
        'router-view': '<router-view></router-view>',
        'the-header': '<header></header>',
        'the-alert': '<div></div>',
      },
    });
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
