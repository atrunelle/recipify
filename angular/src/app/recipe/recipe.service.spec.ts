import { Observable } from 'rxjs';
import { IIngredient } from '@/recipe/recipe.interface';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import RecipeService from '@/recipe/recipe.service';
import ToastService from '@/core/toast.service';

describe('Service: RecipeService', () => {
  let service: RecipeService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  let toastServiceSpy: { show: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    toastServiceSpy = jasmine.createSpyObj('ToastService', ['show']);
    TestBed.configureTestingModule({
      providers: [
        RecipeService,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: ToastService, useValue: toastServiceSpy },
      ],
    });

    service = TestBed.get(RecipeService);
  });

  it('should parse ingredient, and get nutrients data', () => {
    const mockParsedIngredient = {
      parsed: [{
        quantity: 100,
        measure: {
          uri: '',
        },
        food: {
          label: 'Carrot',
          uri: '',
        },
      }],
    };

    const mockNutrients = [{
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
    }];

    httpClientSpy.get.and.returnValue(Observable.of(mockParsedIngredient));
    httpClientSpy.post.and.returnValue(Observable.of(mockNutrients));
    service.getIngredientNutrition('carrot', 1)
      .subscribe((data) => {
        expect(data).toEqual({
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
        });
      });
  });


  it('should return an array of labels for diet tags', () => {
    const items = ['LOW_FAT', 'LOW_SODIUM'];
    const results = service.getDietLabels(items);
    const expected = ['Low fat'];

    expect(results).toEqual(expected);
  });

  it('should return an array of labels for health tags', () => {
    const items = ['VEGETARIAN', 'PESCATARIAN', 'DAIRY_FREE', 'LOW_FAT_ABS'];
    const results = service.getHealthLabels(items);
    const expected = ['Vegetarian', 'Pescatarian', 'Dairy free'];

    expect(results).toEqual(expected);
  });

  it('should get list of macro nutrients to display', () => {
    const items = {
      SUGAR: {
        label: 'SUGAR',
        quantity: 100,
        unit: 'gr',
      },
      FAT: {
        label: 'FAT',
        quantity: 120,
        unit: 'gr',
      }
     };

    const results = service.getMacroNutrientsList(items);
    const expected =  [{
      label: 'FAT',
      quantity: 120,
      unit: 'gr',
    }];

    expect(results).toEqual(expected);
  });

  it('should get list of micro nutrients to display', () => {
    const items = {
        SUGAR: {
        label: 'SUGAR',
        quantity: 100,
        unit: 'gr',
      },
      FAT: {}
    };

    const results = service.getMicroNutrientsList(items);
    const expected = [{
      label: 'SUGAR',
      quantity: 100,
      unit: 'gr',
    }];

    expect(results).toEqual(expected);
  });
});
