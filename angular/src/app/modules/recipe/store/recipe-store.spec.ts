import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import ToastService from '@/core/toast.service';
import RecipeStore from '@/modules/recipe/store/recipe-store';
import NutritionService from '@/modules/recipe/nutrition.service';
import RecipeService from '@/modules/recipe/recipe.service';

describe('Store: recipe', () => {
  let store: RecipeStore;
  let toastServiceSpy: { show: jasmine.Spy };
  let recipeServiceSpy: {
    getIngredientNutrition: jasmine.Spy,
  };
  let nutritionServiceSpy: {
    getTotalNutrients: jasmine.Spy,
  };

  beforeEach(() => {
    toastServiceSpy = jasmine.createSpyObj('ToastService', ['show']);
    recipeServiceSpy = jasmine.createSpyObj('RecipeService', [
      'getIngredientNutrition',
    ]);
    nutritionServiceSpy = jasmine.createSpyObj('NutritionService', [
      'getTotalNutrients',
    ]);
    TestBed.configureTestingModule({
      providers: [
        RecipeStore,
        { provide: RecipeService, useValue: recipeServiceSpy },
        { provide: NutritionService, useValue: nutritionServiceSpy },
        { provide: ToastService, useValue: toastServiceSpy },
      ],
    });

    store = TestBed.get(RecipeStore);
  });

  it('should add ingredient nutrients data', () => {
    const mockedIngredient = {
      nutrients: {
        uri: '',
        yield: 1,
        calories: 100,
        totalWeight: 120,
        dietLabels: [],
        healthLabels: [],
        cautions: [],
        totalNutrients: {},
        totalDaily: {},
        ingredients: [],
      },
      name: 'Carrot',
    };

    recipeServiceSpy.getIngredientNutrition.and.returnValue(Observable.of(mockedIngredient));
    store.addIngredient({ ingredient: 'carrot', numberOfServing: '1' })
      .subscribe(() => {
        expect(store.state.ingredients)
          .toEqual([{
            nutrients: {
              uri: '',
              yield: 1,
              calories: 100,
              totalWeight: 120,
              dietLabels: [],
              healthLabels: [],
              cautions: [],
              totalNutrients: {},
              totalDaily: {},
              ingredients: [],
            },
            name: 'Carrot',
          }]);
      });
  });

  describe('when removing ingredient', () => {
    it('should remove all ingredients if only one ingredient was added', () => {
      store.setState({
        recipes: [],
        totalNutrients: [],
        totalCalories: 0,
        totalWeight: 0,
        ingredients: [{
          nutrients: {
            uri: '',
            yield: 1,
            calories: 100,
            totalWeight: 120,
            dietLabels: [],
            healthLabels: [],
            cautions: [],
            totalNutrients: {},
            totalDaily: {},
            ingredients: [],
          },
          name: 'Carrot',
        }],
      });

      store.removeIngredient(0);
      expect(store.state.ingredients).toEqual([]);
    });

    it('should remove ingredient from list of ingredients', () => {
      store.setState({
        recipes: [],
        totalNutrients: [],
        totalCalories: 0,
        totalWeight: 0,
        ingredients: [{
          nutrients: {
            uri: '',
            yield: 1,
            calories: 100,
            totalWeight: 120,
            dietLabels: [],
            healthLabels: [],
            cautions: [],
            totalNutrients: {},
            totalDaily: {},
            ingredients: [],
          },
          name: 'Carrot',
        }, {
          nutrients: {
            uri: '',
            yield: 1,
            calories: 100,
            totalWeight: 120,
            dietLabels: [],
            healthLabels: [],
            cautions: [],
            totalNutrients: {},
            totalDaily: {},
            ingredients: [],
          },
          name: 'Spinach',
        }, {
          nutrients: {
            uri: '',
            yield: 1,
            calories: 100,
            totalWeight: 120,
            dietLabels: [],
            healthLabels: [],
            cautions: [],
            totalNutrients: {},
            totalDaily: {},
            ingredients: [],
          },
          name: 'Cream',
        }],
      });

      store.removeIngredient(1);
      expect(store.state.ingredients).toEqual([{
        nutrients: {
          uri: '',
          yield: 1,
          calories: 100,
          totalWeight: 120,
          dietLabels: [],
          healthLabels: [],
          cautions: [],
          totalNutrients: {},
          totalDaily: {},
          ingredients: [],
        },
        name: 'Carrot',
      }, {
        nutrients: {
          uri: '',
          yield: 1,
          calories: 100,
          totalWeight: 120,
          dietLabels: [],
          healthLabels: [],
          cautions: [],
          totalNutrients: {},
          totalDaily: {},
          ingredients: [],
        },
        name: 'Cream',
      }]);
    });
  });

  it('should remove all ingredients', () => {
    store.setState({
      recipes: [],
      totalNutrients: [],
      totalCalories: 0,
      totalWeight: 0,
      ingredients: [{
        nutrients: {
          uri: '',
          yield: 1,
          calories: 100,
          totalWeight: 120,
          dietLabels: [],
          healthLabels: [],
          cautions: [],
          totalNutrients: {},
          totalDaily: {},
          ingredients: [],
        },
        name: 'Carrot',
      }, {
        nutrients: {
          uri: '',
          yield: 1,
          calories: 100,
          totalWeight: 120,
          dietLabels: [],
          healthLabels: [],
          cautions: [],
          totalNutrients: {},
          totalDaily: {},
          ingredients: [],
        },
        name: 'Spinach',
      }, {
        nutrients: {
          uri: '',
          yield: 1,
          calories: 100,
          totalWeight: 120,
          dietLabels: [],
          healthLabels: [],
          cautions: [],
          totalNutrients: {},
          totalDaily: {},
          ingredients: [],
        },
        name: 'Cream',
      }],
    });

    store.removeAllIngredients();
    expect(store.state.ingredients).toEqual([]);
  });

  describe('when saving recipe', () => {
    it('should save recipe with default name', () => {
      store.setState({
        recipes: [],
        totalNutrients: [],
        totalCalories: 0,
        totalWeight: 0,
        ingredients: [{
          nutrients: {
            uri: '',
            yield: 1,
            calories: 100,
            totalWeight: 120,
            dietLabels: [],
            healthLabels: [],
            cautions: [],
            totalNutrients: {},
            totalDaily: {},
            ingredients: [],
          },
          name: 'Carrot',
        }],
      });

      store.saveRecipe({
        name: '',
      });

      expect(store.state.recipes).toEqual([{
        name: 'Recipe 1',
        ingredients: [{
          nutrients: {
            uri: '',
            yield: 1,
            calories: 100,
            totalWeight: 120,
            dietLabels: [],
            healthLabels: [],
            cautions: [],
            totalNutrients: {},
            totalDaily: {},
            ingredients: [],
          },
          name: 'Carrot',
        }],
      }]);
      expect(store.state.ingredients).toEqual([]);
    });

    it('should save recipe with provided name', () => {
      store.setState({
        recipes: [],
        totalNutrients: [],
        totalCalories: 0,
        totalWeight: 0,
        ingredients: [{
          nutrients: {
            uri: '',
            yield: 1,
            calories: 100,
            totalWeight: 120,
            dietLabels: [],
            healthLabels: [],
            cautions: [],
            totalNutrients: {},
            totalDaily: {},
            ingredients: [],
          },
          name: 'Carrot',
        }],
      });

      store.saveRecipe({
        name: 'My awesome recipe',
      });

      expect(store.state.recipes).toEqual([{
        name: 'My awesome recipe',
        ingredients: [{
          nutrients: {
            uri: '',
            yield: 1,
            calories: 100,
            totalWeight: 120,
            dietLabels: [],
            healthLabels: [],
            cautions: [],
            totalNutrients: {},
            totalDaily: {},
            ingredients: [],
          },
          name: 'Carrot',
        }],
      }]);
      expect(store.state.ingredients).toEqual([]);
    });
  });

  it('should should calculate total nutrients', () => {
    nutritionServiceSpy.getTotalNutrients.and.returnValue([{}, {}]);
    store.setState({
      recipes: [],
      totalNutrients: [],
      totalCalories: 0,
      totalWeight: 0,
      ingredients: [{
          name: '',
          nutrients: {
            calories: 25,
            uri: '',
            yield: 0,
            totalDaily: {},
            totalNutrients: {},
            totalWeight: 25,
            healthLabels: [],
            dietLabels: [],
            cautions: [],
            ingredients: [],
          },
        }],
    });

    store.calculateTotalNutrients();

    expect(store.state.totalNutrients).toEqual([{}, {}]);
  });

  it('should get total calories for all ingredients', () => {
    store.setState({
      recipes: [],
      totalNutrients: [],
      totalCalories: 0,
      totalWeight: 0,
      ingredients: [{
          name: '',
          nutrients: {
            calories: 25,
            uri: '',
            yield: 0,
            totalDaily: {},
            totalNutrients: {},
            totalWeight: 25,
            healthLabels: [],
            dietLabels: [],
            cautions: [],
            ingredients: [],
          },
        }, {
          name: '',
          nutrients: {
            calories: 50,
            uri: '',
            yield: 0,
            totalDaily: {},
            totalNutrients: {},
            totalWeight: 25,
            healthLabels: [],
            dietLabels: [],
            cautions: [],
            ingredients: [],
          },
        }, {
          name: '',
          nutrients: {
            calories: 15,
            uri: '',
            yield: 0,
            totalDaily: {},
            totalNutrients: {},
            totalWeight: 25,
            healthLabels: [],
            dietLabels: [],
            cautions: [],
            ingredients: [],
          },
        },
      ],
    });

    store.calculateTotalCalories();
    expect(store.state.totalCalories).toBe(90);
  });

  it('should get total weight for all ingredients', () => {
    store.setState({
      recipes: [],
      totalNutrients: [],
      totalCalories: 0,
      totalWeight: 0,
      ingredients: [{
          name: '',
          nutrients: {
            calories: 25,
            uri: '',
            yield: 0,
            totalDaily: {},
            totalNutrients: {},
            totalWeight: 500,
            healthLabels: [],
            dietLabels: [],
            cautions: [],
            ingredients: [],
          },
        }, {
          name: '',
          nutrients: {
            calories: 50,
            uri: '',
            yield: 0,
            totalDaily: {},
            totalNutrients: {},
            totalWeight: 250,
            healthLabels: [],
            dietLabels: [],
            cautions: [],
            ingredients: [],
          },
        }, {
          name: '',
          nutrients: {
            calories: 15,
            uri: '',
            yield: 0,
            totalDaily: {},
            totalNutrients: {},
            totalWeight: 15,
            healthLabels: [],
            dietLabels: [],
            cautions: [],
            ingredients: [],
          },
        },
      ],
    });

    store.calculateTotalWeight();

    expect(store.state.totalWeight).toBe(765);
  });

  it('should reset total weight', () => {
    store.setState({
      recipes: [],
      totalNutrients: [],
      totalCalories: 0,
      totalWeight: 765,
      ingredients: [],
    });

    store.resetTotalWeight();

    expect(store.state.totalWeight).toBe(0);
  });

  it('should reset total calories', () => {
    store.setState({
      recipes: [],
      totalNutrients: [],
      totalCalories: 800,
      totalWeight: 765,
      ingredients: [],
    });

    store.resetTotalCalories();

    expect(store.state.totalCalories).toBe(0);
  });

  it('should reset total nutrients', () => {
    store.setState({
      recipes: [],
      totalNutrients: [{}, {}],
      totalCalories: 0,
      totalWeight: 765,
      ingredients: [],
    });

    store.resetTotalNutrients();

    expect(store.state.totalNutrients).toEqual([]);
  });
});
