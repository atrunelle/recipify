import * as actionsTypes from '../actions.type';

export const saveRecipe = (recipe) => {
    return {
        type: actionsTypes.SAVE_RECIPE,
        payload: recipe,
    }
}
