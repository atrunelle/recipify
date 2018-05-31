const defaultState = {
  isFetching: false,
  isFetched: false,
  error: null,
  ingredients: [],
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_INGREDIENT_PENDING':
      return {
        ...state,
        isFetching: true,
      }

    case 'FETCH_INGREDIENT_REJECTED':
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }

    case 'ADD_INGREDIENT':
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        ingredients: [
          ...state.ingredients,
          action.payload,
        ]
      }

    case 'REMOVE_INGREDIENT':
      const index = action.payload;
      return {
        ...state,
        ingredients: [
          ...state.ingredients.filter((item, itemIndex) => itemIndex !== index),
        ]
      }

    case 'REMOVE_ALL_INGREDIENTS':
      return {
        ...state,
        ingredients: []
      }

    default:
      return state;
  }
};

export default reducer;