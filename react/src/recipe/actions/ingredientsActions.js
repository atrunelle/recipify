export const fetchIngredientPending = () => {
  return {
    type: 'FETCH_INGREDIENT_PENDING'
  };
}

export const fetchIngredientRejected = (error) => {
  return {
    type: 'FETCH_INGREDIENT_REJECTED',
    payload: error,
  }
};

export const addIngredient = (ingredient) => {
  return {
    type: 'ADD_INGREDIENT',
    payload: ingredient,
  }
}

export const removeIngredient = (index) => {
  return {
    type: 'REMOVE_INGREDIENT',
    payload: index,
  }
}

export const removeAllIngredients = () => {
  return {
    type: 'REMOVE_ALL_INGREDIENTS',
  }
}