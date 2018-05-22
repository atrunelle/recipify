const defaultState = {
  ingredients: [],
}
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.payload,
        ]
      }
    case 'REMOVE_INGREDIENT':
      return {
        ...state,
        ingredients: [
          ...state.ingredients.splice(action.payload, 1),
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