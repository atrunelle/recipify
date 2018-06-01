import * as actionsTypes from '../actions.type';

export const fetchIngredientPending = () => {
  return {
    type: actionsTypes.FETCH_INGREDIENT_PENDING
  }
}

export const fetchIngredientRejected = (error) => {
  return {
    type: actionsTypes.FETCH_INGREDIENT_REJECTED,
    payload: error,
  }
}

export const addIngredient = (ingredient) => {
  return {
    type: actionsTypes.ADD_INGREDIENT,
    payload: ingredient,
  }
}

export const removeIngredient = (index) => {
  return {
    type: actionsTypes.REMOVE_INGREDIENT,
    payload: index,
  }
}

export const removeAllIngredients = () => {
  return {
    type: actionsTypes.REMOVE_ALL_INGREDIENTS,
  }
}

export const updateIngredientsTotalNutritients = (totalNutrients) => {
  return {
    type: actionsTypes.UPDATE_INGREDIENTS_TOTAL_NUTRITION,
    payload: totalNutrients
  }  
}

export const removeAllIngredientsTotalNutritients = () => {
  return {
    type: actionsTypes.REMOVE_ALL_INGREDIENTS_TOTAL_NUTRITION,
  }  
}