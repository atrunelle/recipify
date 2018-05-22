import { mount } from '@vue/test-utils';
import CreateRecipe from '@/pages/create-recipe';

describe('Component: create recipe', () => {
  let component;

  beforeEach(() => {
    component = mount(CreateRecipe, {
      stubs: ['recipe-creator'],
    });
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
