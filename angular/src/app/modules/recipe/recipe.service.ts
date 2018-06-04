import { map, catchError, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

import { DIET_LABELS, HEALTH_LABEL, MACRO_NUTRIENTS, MICRO_NUTRIENTS } from './edamam.constant';
import { IIngredient, INutrientsValue } from './recipe.interface';

@Injectable()
class RecipeService {
  private foodUrl = `/api/food-database`;
  private apiAuth = `app_id=${environment.appId}&app_key=${environment.appKey}`;

  constructor (private http: HttpClient) {
  }

  private parseIngredient (ingredientName): Observable<any> {
    const url = `${this.foodUrl}/parser?ingr=${ingredientName}&${this.apiAuth}`;

    return this.http.get(url);
  }

  private getNutrients (ingredients): Observable<any> {
    const url = `${this.foodUrl}/nutrients?${this.apiAuth}`;

    return this.http.post(url, ingredients);
  }

  public getIngredients (data, numberOfServings) {
    const ingredients = data.parsed.map((item, index) => {
      const value = {
        foodURI: item.food.uri,
        quantity: undefined,
        measureURI: undefined,
      };

      if (item.quantity) {
        value.quantity = item.quantity;
      }

      if (item.measure) {
        value.measureURI = item.measure.uri;
      }
      return value;
    });

    return {
      yield: numberOfServings,
      ingredients,
    };
  }


  public getIngredientNutrition (ingredientName: string, numberOfServings: number): Observable<IIngredient> {
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
