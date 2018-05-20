import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';


import { DIET_LABELS, HEALTH_LABEL, MACRO_NUTRIENTS, MICRO_NUTRIENTS } from './edamam.constant';
import { IIngredient, IRecipe } from './recipe.interface';

@Injectable()
class RecipeService {
  public recipes: IRecipe[] = [];
  public recipeIngredients: IIngredient[] = [];

  @Output() recipeIngredients$: EventEmitter<IIngredient[]> = new EventEmitter();

  private foodUrl = `/api/food-database`;
  private apiAuth = `app_id=${environment.appId}&app_key=${environment.appKey}`;

  constructor (private http: HttpClient) {
  }

  public addIngredient(ingredient, numberOfServing): Observable<any> {
    return this.getIngredientNutrition(ingredient, numberOfServing)
      .pipe(map((ingredientData) => {
        this.recipeIngredients.push(ingredientData);
        this.recipeIngredients$.emit(this.recipeIngredients);
      }));
  }

  public removeIngredient(index) {
    this.recipeIngredients.splice(index, 1);
    this.recipeIngredients$.emit(this.recipeIngredients);
  }

  public removeAllIngredients() {
    this.recipeIngredients = [];
    this.recipeIngredients$.emit(this.recipeIngredients);
  }

  public saveRecipe(name?: string) {
    const defaultName = `Recipe ${this.recipes.length + 1}`;

    this.recipes.push({
      name: name || defaultName,
      ingredients: this.recipeIngredients,
    });
    this.removeAllIngredients();
  }

  private parseIngredient (ingredientName): Observable<any> {
    const url = `${this.foodUrl}/parser?ingr=${ingredientName}&${this.apiAuth}`;

    return this.http.get(url);
  }

  private getNutrients (ingredient): Observable<any> {
    const url = `${this.foodUrl}/nutrients?${this.apiAuth}`;

    return this.http.post(url, ingredient);
  }

  public getIngredientNutrition (ingredientName, numberOfServings): Observable<IIngredient> {
    return this.parseIngredient(ingredientName)
      .pipe(
        mergeMap((data: any) => {
          const ingredients = this.getIngredients(data, numberOfServings);

          return this
            .getNutrients(ingredients)
            .pipe(map((nutrients) => {
              return {
                nutrients,
                name: data.parsed[0].food.label,
              };
            }));
        }), catchError((response: HttpErrorResponse) => {
          console.log(response.message);
          return observableThrowError(response.message);
          // throw error.response.data.message;
        })
      );
  }

  public getIngredients (data, numberOfServings = 1) {
    const ingredients = data.parsed.map((item, index) => {
      return {
        quantity: item.quantity,
        measureURI: item.measure.uri,
        foodURI: item.food.uri,
      };
    });

    return {
      yield: numberOfServings,
      ingredients,
    };
  }

  public getDietLabels (items) {
    return this.getLabels(DIET_LABELS, items);
  }

  public getHealthLabels (items) {
    return this.getLabels(HEALTH_LABEL, items);
  }

  private getLabels (labelsArray, items) {
    return items.reduce((labels, item) => {
      const label = labelsArray[item];

      if (!label) {
        return labels;
      }

      return labels.concat(label);
    }, []);
  }

  public getMacroNutrientsList (items) {
    return this.filterObject(items, (key) => {
      return MACRO_NUTRIENTS.includes(key);
    });
  }

  public getMicroNutrientsList (items) {
    return this.filterObject(items, (key) => {
      return MICRO_NUTRIENTS.includes(key);
    });
  }

  private filterObject (object, callback) {
    return Object.values(Object.keys(object).filter(callback)
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {}));
  }
}

export default RecipeService;
