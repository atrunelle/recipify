const defaultState = {
  recipes: [],
}
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SAVE_RECIPE':
      const { ingredients, name } = action.payload;
      const defaultName = `Recipe ${state.recipes.length + 1}`;

      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            ingredients,
            name: name | defaultName,
          },
        ]
      }
    default:
      return state;
  }
};
  
export default reducer;