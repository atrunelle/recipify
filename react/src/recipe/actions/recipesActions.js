export const saveRecipe = (recipe) => {
    return {
        type: 'SAVE_RECIPE',
        payload: recipe,
    }
}
