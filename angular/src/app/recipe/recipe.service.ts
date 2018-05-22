import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

import ToastService from '@/core/toast.service';
import { DIET_LABELS, HEALTH_LABEL, MACRO_NUTRIENTS, MICRO_NUTRIENTS } from './edamam.constant';
import { IIngredient, IRecipe, INutrientsValue } from './recipe.interface';

export interface IState {
  recipes: IRecipe[];
  ingredients: IIngredient[];
}

const state: IState = {
  recipes: [],
  ingredients: [],
};

@Injectable()
class RecipeService {
  private foodUrl = `/api/food-database`;
  private apiAuth = `app_id=${environment.appId}&app_key=${environment.appKey}`;

  private subject = new BehaviorSubject<IState>(state);
  public store = this.subject.asObservable().distinctUntilChanged();

  constructor (
    private http: HttpClient,
    private toastService: ToastService,
  ) {
  }


  get<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  addIngredient({ ingredient, numberOfServing }: { ingredient: IIngredient, numberOfServing: string }) {
    const value = this.subject.value;
    return this.getIngredientNutrition(ingredient, parseInt(numberOfServing, 0))
      .pipe(map((ingredientData) => {
        this.subject.next({
          ...value,
          ingredients: [
            ...value.ingredients,
            ingredientData,
          ],
        });
      }));
  }

  public removeIngredient(index) {
    const value = this.subject.value;
   if (value.ingredients.length === 1) {
    this.removeAllIngredients();
   } else {
     this.subject.next({
       ...value,
       ingredients: [
         ...value.ingredients.splice(index, 1),
       ],
     });
   }
  }

  public removeAllIngredients() {
    const value = this.subject.value;
    this.subject.next({
      ...value,
      ingredients: [],
    });
  }

  public saveRecipe({ name }: { name: string }) {
    const value = this.subject.value;

    const defaultName = `Recipe ${value.recipes.length + 1}`;
    const recipeName = name || defaultName;

    this.subject.next({
      ...value,
      recipes: [
        ...value.recipes,
        {
          name: recipeName,
          ingredients: value.ingredients,
        },
      ],
    });
    this.removeAllIngredients();
    this.toastService.show('SUCCESS', `${recipeName} was succefully saved!`);
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
        mergeMap((data) => {
          if (!data.parsed.length) {
            throw new Error(`We couldn't find the food you entered. Please check the format and spelling. Example: 200gr chicken`);
          }
          const ingredients = this.getIngredients(data, numberOfServings);

          return this
            .getNutrients(ingredients)
            .pipe(
              map((nutrients) => {
                return {
                  nutrients,
                  name: data.parsed[0].food.label,
                };
              }),
              catchError((response: HttpErrorResponse) => {
                return throwError(response);
              })
            );
        }),
        catchError((response: HttpErrorResponse) => {
          return throwError(response);
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

  public getDietLabels (items): string[] {
    return this.getLabels(DIET_LABELS, items);
  }

  public getHealthLabels (items): string[] {
    return this.getLabels(HEALTH_LABEL, items);
  }

  private getLabels (labelsArray, items): string[] {
    return items.reduce((labels, item) => {
      const label = labelsArray[item];

      if (!label) {
        return labels;
      }

      return labels.concat(label);
    }, []);
  }

  public getMacroNutrientsList (items): INutrientsValue[] {
    return this.filterObject(items, (key) => {
      return MACRO_NUTRIENTS.includes(key);
    });
  }

  public getMicroNutrientsList (items): INutrientsValue[] {
    return this.filterObject(items, (key) => {
      return MICRO_NUTRIENTS.includes(key);
    });
  }

  private filterObject (object, callback): INutrientsValue[] {
    return Object.values(Object.keys(object).filter(callback)
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {}));
  }
}

export default RecipeService;
