import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import ToastService from '@/core/toast.service';
import RecipeStore from '@/recipe/store/recipe-store';
import RecipeService from '@/recipe/recipe.service';

describe('Store: recipe', () => {
  let store: RecipeStore;
  let toastServiceSpy: { show: jasmine.Spy };
  let recipeServiceSpy: {
    getIngredientNutrition: jasmine.Spy,
  };

  beforeEach(() => {
    toastServiceSpy = jasmine.createSpyObj('ToastService', ['show']);
    recipeServiceSpy = jasmine.createSpyObj('RecipeService', [
      'getIngredientNutrition',
    ]);
    TestBed.configureTestingModule({
      providers: [
        RecipeStore,
        { provide: RecipeService, useValue: recipeServiceSpy },
        { provide: ToastService, useValue: toastServiceSpy },
      ],
    });

    store = TestBed.get(RecipeStore);
  });

  it('should add ingredient nutrients data', () => {
    const mockedIngredient = {
      nutrients: [{
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
      }],
      name: 'Carrot',
    };

    recipeServiceSpy.getIngredientNutrition.and.returnValue(Observable.of(mockedIngredient));
    store.addIngredient({ ingredient: 'carrot', numberOfServing: '1' })
      .subscribe(() => {
        expect(store.state.ingredients)
          .toEqual([{
            nutrients: [{
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
            }],
            name: 'Carrot',
          }]);
      });
  });

  describe('when removing ingredient', () => {
    it('should remove all ingredients if only one ingredient was added', () => {
      store.setState({
        recipes: [],
        ingredients: [{
          nutrients: [{
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
          }],
          name: 'Carrot',
        }],
      });

      store.removeIngredient(0);
      expect(store.state.ingredients).toEqual([]);
    });

    it('should remove ingredient from list of ingredients', () => {
      store.setState({
        recipes: [],
        ingredients: [{
          nutrients: [{
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
          }],
          name: 'Carrot',
        }, {
          nutrients: [{
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
          }],
          name: 'Spinach',
        }, {
          nutrients: [{
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
          }],
          name: 'Cream',
        }],
      });

      store.removeIngredient(1);
      expect(store.state.ingredients).toEqual([{
        nutrients: [{
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
        }],
        name: 'Carrot',
      }, {
        nutrients: [{
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
        }],
        name: 'Cream',
      }]);
    });
  });

  it('should remove all ingredients', () => {
    store.setState({
      recipes: [],
      ingredients: [{
        nutrients: [{
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
        }],
        name: 'Carrot',
      }, {
        nutrients: [{
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
        }],
        name: 'Spinach',
      }, {
        nutrients: [{
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
        }],
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
        ingredients: [{
          nutrients: [{
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
          }],
          name: 'Carrot',
        }],
      });

      store.saveRecipe({
        name: '',
      });

      expect(store.state.recipes).toEqual([{
        name: 'Recipe 1',
        ingredients: [{
          nutrients: [{
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
          }],
          name: 'Carrot',
        }],
      }]);
      expect(store.state.ingredients).toEqual([]);
    });

    it('should save recipe with provided name', () => {
      store.setState({
        recipes: [],
        ingredients: [{
          nutrients: [{
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
          }],
          name: 'Carrot',
        }],
      });

      store.saveRecipe({
        name: 'My awesome recipe',
      });

      expect(store.state.recipes).toEqual([{
        name: 'My awesome recipe',
        ingredients: [{
          nutrients: [{
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
          }],
          name: 'Carrot',
        }],
      }]);
      expect(store.state.ingredients).toEqual([]);
    });
  });
});
