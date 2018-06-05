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

export const updateTotalNutriton = (totalNutrients) => {
  return {
    type: actionsTypes.UPDATE_TOTAL_NUTRITION,
    payload: totalNutrients
  }  
}

export const updateTotalWeight = (totalWeight) => {
  return {
    type: actionsTypes.UPDATE_TOTAL_WEIGHT,
    payload: totalWeight
  }  
}

export const updateTotalCalories = (totalCalories) => {
  return {
    type: actionsTypes.UPDATE_TOTAL_CALORIES,
    payload: totalCalories
  }  
}

export const resetTotalNutritients = () => {
  return {
    type: actionsTypes.RESET_TOTAL_NUTRITION,
  }  
}

export const resetTotalCalories = () => {
  return {
    type: actionsTypes.RESET_TOTAL_CALORIES,
  }  
}

export const resetTotalWeight = () => {
  return {
    type: actionsTypes.RESET_TOTAL_WEIGHT,
  }  
}