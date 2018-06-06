import * as actions from '../recipesActions';

describe('Actions: recipes', () => {
  it('should get saveRecipe action', () => {
    const recipe = {
      name: 'My recipes',
      ingredients: [{}],
    };

    expect(actions.saveRecipe(recipe)).toEqual({
      type: 'SAVE_RECIPE',
      payload: {
        name: 'My recipes',
        ingredients: [{}],
      },
    });
  });
});
