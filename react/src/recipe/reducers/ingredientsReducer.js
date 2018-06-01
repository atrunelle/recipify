import { createReducer } from ".";
import * as actionsTypes from '../actions.type';

const defaultState = {
  isFetching: false,
  isFetched: false,
  error: null,
  ingredients: [],
  totalNutrients: [],
}

const reducer = createReducer(defaultState, {
  [actionsTypes.FETCH_INGREDIENT_PENDING]: (state, action) => {
    return {
      ...state,
      isFetching: true,
    };

  },

  [actionsTypes.FETCH_INGREDIENT_REJECTED]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: action.payload,
    };
  },

  [actionsTypes.ADD_INGREDIENT]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      isFetched: true,
      ingredients: [
        ...state.ingredients,
        action.payload,
      ],
    };
  },

  [actionsTypes.REMOVE_INGREDIENT]: (state, action) => {
    const index = action.payload;
    return {
      ...state,
      ingredients: [
        ...state.ingredients.filter((item, itemIndex) => itemIndex !== index),
      ],
    };
  },

  [actionsTypes.REMOVE_ALL_INGREDIENTS]: (state, action) => {
    return {
      ...state,
      ingredients: [],
    };
  },

  [actionsTypes.UPDATE_INGREDIENTS_TOTAL_NUTRITION]: (state, action) => {
    return {
      ...state,
      totalNutrients: [...action.payload],
    };
  },

  [actionsTypes.REMOVE_ALL_INGREDIENTS_TOTAL_NUTRITION]: (state, action) => {
    return {
      ...state,
      totalNutrients: [],
    };
  },
});

export default reducer;