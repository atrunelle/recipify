import reducer from '../ingredientsReducer';

describe('Reducer: Ingredients', () => {
  it('should set is fetching to true when fetching ingredient', () => {
    const state = {
      isFetching: false,
      ingredients: [],
    };

    const newState = reducer(state, {
      type: 'FETCH_INGREDIENT_PENDING',
    });
    expect(newState).toEqual({
      isFetching: true,
      ingredients: [],
    });
  });

  it('should set is fetching to false and error when fetching failed', () => {
    const state = {
      isFetching: true,
      error: {},
      ingredients: [],
    };

    const newState = reducer(state, {
      type: 'FETCH_INGREDIENT_REJECTED',
      payload: 'my error',
    });
    expect(newState).toEqual({
      isFetching: false,
      error: 'my error',
      ingredients: [],
    });
  });

  it('should add ingredient and set fecthing state', () => {
    const state = {
      isFetching: true,
      isFetched: false,
      ingredients: [],
    };

    const newState = reducer(state, {
      type: 'ADD_INGREDIENT',
      payload: {
        name: 'carrot',
        nutrients: {},
      },
    });
    expect(newState).toEqual({
      isFetching: false,
      isFetched: true,
      ingredients: [{
        name: 'carrot',
        nutrients: {},
      }],
    });
  });

  it('should remove ingredient', () => {
    const state = {
      ingredients: [{
        name: 'carrot'
      }, {
        name: 'spinach',
      }],
    };

    const newState = reducer(state, {
      type: 'REMOVE_INGREDIENT',
      payload: 1,
    });
    expect(newState).toEqual({
      ingredients: [{
        name: 'carrot',
      }],
    });
  });

  it('should remove all ingredients', () => {
    const state = {
      ingredients: [{
        name: 'carrot'
      }, {
        name: 'spinach',
      }],
    };

    const newState = reducer(state, {
      type: 'REMOVE_ALL_INGREDIENTS',
    });
    expect(newState).toEqual({
      ingredients: [],
    });
  });

  it('should update total nutrients', () => {
    const state = {
      totalNutrients: [],
    };

    const newState = reducer(state, {
      type: 'UPDATE_TOTAL_NUTRITION',
      payload: [{
        label: 'fat'
      }]
    });
    expect(newState).toEqual({
      totalNutrients: [{
        label: 'fat'
      }],
    });
  });

  it('should update total calories', () => {
    const state = {
      totalCalories: 0,
    };

    const newState = reducer(state, {
      type: 'UPDATE_TOTAL_CALORIES',
      payload: 150
    });
    expect(newState).toEqual({
      totalCalories: 150,
    });
  });

  it('should update total calories', () => {
    const state = {
      totalWeight: 0,
    };

    const newState = reducer(state, {
      type: 'UPDATE_TOTAL_WEIGHT',
      payload: 250
    });
    expect(newState).toEqual({
      totalWeight: 250,
    });
  });

  it('should reset total nutrients', () => {
    const state = {
      totalNutrients: [{
        label: 'fat'
      }],
    };

    const newState = reducer(state, {
      type: 'RESET_TOTAL_NUTRITION',
    });
    expect(newState).toEqual({
      totalNutrients: [],
    });
  });

  it('should reset total calories', () => {
    const state = {
      totalCalories: 210,
    };

    const newState = reducer(state, {
      type: 'RESET_TOTAL_CALORIES',
    });
    expect(newState).toEqual({
      totalCalories: 0,
    });
  });

  it('should reset total calories', () => {
    const state = {
      totalWeight: 240,
    };

    const newState = reducer(state, {
      type: 'RESET_TOTAL_WEIGHT',
    });
    expect(newState).toEqual({
      totalWeight: 0,
    });
  });
});
