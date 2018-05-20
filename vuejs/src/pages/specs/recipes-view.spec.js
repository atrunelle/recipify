import { mount } from '@vue/test-utils';
import RecipesView from '@/pages/recipes-view';

describe('Component: recipes view', () => {
  let component;

  beforeEach(() => {
    component = mount(RecipesView, {
      stubs: {
        'recipes-list': '<div></div>',
      },
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
