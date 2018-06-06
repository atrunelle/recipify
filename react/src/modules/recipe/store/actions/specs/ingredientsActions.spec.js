import * as actions from '../ingredientsActions';

describe('Actions: ingredients', () => {
  it('should get fetchIngredientPending action', () => {
    expect(actions.fetchIngredientPending()).toEqual({
      type: 'FETCH_INGREDIENT_PENDING',
    });
  });

  it('should get fetchIngredientRejected action', () => {
    expect(actions.fetchIngredientRejected('my error')).toEqual({
      type: 'FETCH_INGREDIENT_REJECTED',
      payload: 'my error',
    });
  });

  it('should get addIngredient action', () => {
    const ingredient = {
      name: 'carrot',
    };

    expect(actions.addIngredient(ingredient)).toEqual({
      type: 'ADD_INGREDIENT',
      payload: {
        name: 'carrot',
      },
    });
  });

  it('should get removeIngredient action', () => {
    expect(actions.removeIngredient(2)).toEqual({
      type: 'REMOVE_INGREDIENT',
      payload: 2,
    });
  });

  it('should get removeAllIngredients action', () => {
    expect(actions.removeAllIngredients()).toEqual({
      type: 'REMOVE_ALL_INGREDIENTS',
    });
  });

  it('should get updateTotalNutriton action', () => {
    const totalNutrients = [{}];

    expect(actions.updateTotalNutriton(totalNutrients)).toEqual({
      type: 'UPDATE_TOTAL_NUTRITION',
      payload: totalNutrients,
    });
  });

  it('should get updateTotalWeight action', () => {
    expect(actions.updateTotalWeight(300)).toEqual({
      type: 'UPDATE_TOTAL_WEIGHT',
      payload: 300,
    });
  });

  it('should get updateTotalCalories action', () => {
    expect(actions.updateTotalCalories(200)).toEqual({
      type: 'UPDATE_TOTAL_CALORIES',
      payload: 200,
    });
  });
    
  it('should get resetTotalNutritients action', () => {
    expect(actions.resetTotalNutritients()).toEqual({
      type: 'RESET_TOTAL_NUTRITION',
    });
  });
    
  it('should get resetTotalCalories action', () => {
    expect(actions.resetTotalCalories()).toEqual({
      type: 'RESET_TOTAL_CALORIES',
    });
  });

  it('should get resetTotalWeight action', () => {
    expect(actions.resetTotalWeight()).toEqual({
      type: 'RESET_TOTAL_WEIGHT',
    });
  });
});


