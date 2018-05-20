import { mount } from '@vue/test-utils';
import Recipe from '../recipe';

describe('Component: recipe', () => {
  let component;

  beforeEach(() => {
    component = mount(Recipe, {
      stubs: ['ingredients-list', 'recipe-data', 'search-ingredient'],
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
