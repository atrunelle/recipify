import { IIngredient } from '@/modules/recipe/recipe.interface';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDesignModule } from '@/mat-design.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { IngredientDetailsComponent } from './ingredient-details.component';

describe('IngredientDetailsComponent', () => {
  let component: IngredientDetailsComponent;
  let fixture: ComponentFixture<IngredientDetailsComponent>;
  const mockIngredient: IIngredient = {
    name: 'carrot',
    nutrients: {
      uri: '',
      yield: 1,
      calories: 100,
      totalWeight: 100,
      dietLabels: [],
      healthLabels: [],
      cautions: [],
      ingredients: [],
      totalNutrients: {
        FAT: {
          quantity: 5,
          unit: 'gr',
          label: 'Fat',
        },
        PROCNT: {
          quantity: 5,
          unit: 'gr',
          label: 'Fat',
        },
      },
      totalDaily: {
        FAT: {
          quantity: 5,
          unit: '%',
          label: 'Fat',
        },
        PROCNT: {
          quantity: 5,
          unit: '%',
          label: 'Fat',
        },
      },
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDetailsComponent ],
      imports: [
        MatDesignModule,
        NoopAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDetailsComponent);
    component = fixture.componentInstance;
    component.ingredient = mockIngredient;
    component.index = 2;
    fixture.detectChanges();
  });

  it('should remove ingredient', () => {
    const removeButon  = fixture.debugElement.nativeElement.querySelector('#removeButton-2');
    let index = -1;

    component.remove.subscribe((data) => index = data);
    removeButon.click();

    expect(index).toBe(2);
  });
});
