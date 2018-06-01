import { createReducer } from ".";
import * as actionsTypes from '../actions.type';

const defaultState = {
  recipes: [],
}

const reducer = createReducer(defaultState, {
  [actionsTypes.SAVE_RECIPE]: (state, action) => {
    const { ingredients, name } = action.payload;
    const defaultName = `Recipe ${state.recipes.length + 1}`;

    return {
      ...state,
      recipes: [
        ...state.recipes,
        {
          ingredients,
          name: name || defaultName,
        },
      ]
    };
  },
});
  
export default reducer;