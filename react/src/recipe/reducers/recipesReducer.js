const defaultState = {
  recipes: [],
}
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SAVE_RECIPE':
      return {
        ...state,
        recipes: [
          ...state.recipes,
          action.payload,
        ]
      }
    default:
      return state;
  }
};
  
export default reducer;