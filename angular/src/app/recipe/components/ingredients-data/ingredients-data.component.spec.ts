import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MatDesignModule } from '@/mat-design.module';

import { IngredientsDataComponent } from './ingredients-data.component';
import NutritionService from '@/recipe/nutrition.service';

describe('RecipeDataComponent', () => {
  let component: IngredientsDataComponent;
  let fixture: ComponentFixture<IngredientsDataComponent>;

  let nutrionServiceSpy: {
    getTotalForNutrient: jasmine.Spy,
    getTotalCalories: jasmine.Spy,
    getTotalWeight: jasmine.Spy,
   };

  beforeEach(async(() => {
    nutrionServiceSpy = jasmine.createSpyObj('NutrionService', [
      'getTotalForNutrient',
      'getTotalCalories',
      'getTotalWeight',
    ]);
    TestBed.configureTestingModule({
      declarations: [IngredientsDataComponent],
      imports: [
        MatDesignModule,
      ],
      providers: [
        { provide: NutritionService, useValue: nutrionServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get total calories', () => {
    nutrionServiceSpy.getTotalCalories.and.returnValue(100);
    expect(component.totalCalories).toBe(100);
  });

  it('should get total weight', () => {
    nutrionServiceSpy.getTotalWeight.and.returnValue(150);
    expect(component.totalWeight).toBe(150);
  });

  it('should get total nutrients', () => {
    nutrionServiceSpy.getTotalForNutrient.and.returnValue({
      quantity: 10,
      unit: 'gr',
      label: 'FAT',
    });

    const expected = [{
      label: 'FAT',
      totalQuantity: {
        quantity: 10,
        unit: 'gr',
        label: 'FAT',
      },
      totalDaily: {
        quantity: 10,
        unit: 'gr',
        label: 'FAT',
      }
    }, {
      label: 'FAT',
      totalQuantity: {
        quantity: 10,
        unit: 'gr',
        label: 'FAT',
      },
      totalDaily: {
        quantity: 10,
        unit: 'gr',
        label: 'FAT',
      }
    }, {
      label: 'FAT',
      totalQuantity: {
        quantity: 10,
        unit: 'gr',
        label: 'FAT',
      },
      totalDaily: {
        quantity: 10,
        unit: 'gr',
        label: 'FAT',
      }
    }];
    expect(component.totalNutrients).toEqual(expected);
  });
});
