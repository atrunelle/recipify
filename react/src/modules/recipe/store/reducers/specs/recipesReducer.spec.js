import reducer from '../recipesReducer';

describe('Reducer: Recipes', () => {
  describe('when adding recipe', () => {
    it('should add recipe with provided name', () => {
      const state = {
        recipes: [{
          name: 'Recipe 1',
        }],
      };
  
      const newState = reducer(state, {
        type: 'SAVE_RECIPE',
        payload: {
          name: 'my recipe',
          ingredients: [{}],
        }
      });
      expect(newState).toEqual({
        recipes: [{
          name: 'Recipe 1',
        }, {
          name: 'my recipe',
          ingredients: [{}],
        }],
      });
    });

    it('should add recipe with default name', () => {
      const state = {
        recipes: [{
          name: 'Recipe 1',
        }],
      };
  
      const newState = reducer(state, {
        type: 'SAVE_RECIPE',
        payload: {
          ingredients: [{}],
        }
      });
      expect(newState).toEqual({
        recipes: [{
          name: 'Recipe 1',
        }, {
          name: 'Recipe 2',
          ingredients: [{}],
        }],
      });
    });
  });
});
