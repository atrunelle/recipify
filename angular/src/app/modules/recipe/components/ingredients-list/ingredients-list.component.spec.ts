import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MatDesignModule } from '@/mat-design.module';
import { IIngredient } from '@/recipe/recipe.interface';

import { IngredientsListComponent } from './ingredients-list.component';

describe('IngredientsListComponent', () => {
  let component: IngredientsListComponent;
  let fixture: ComponentFixture<IngredientsListComponent>;

  const mockIngredients: IIngredient[] = [{
    name: 'carrot',
    nutrients: [{
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
    }],
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientsListComponent],
      imports: [
        MatDesignModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsListComponent);
    component = fixture.componentInstance;
    component.ingredients = mockIngredients;
    fixture.detectChanges();
  });

  it('should remove ingredient', () => {
    const removeButon  = fixture.debugElement.nativeElement.querySelector('#removeButton');
    let index = -1;

    component.remove.subscribe((data) => index = data);
    removeButon.click();

    expect(index).toBe(0);
  });

  it('should remove all ingredients', () => {
    const removeAllButon  = fixture.debugElement.nativeElement.querySelector('#removeAllButton');
    let result = '';
    component.removeAll.subscribe((data) => result = data);
    removeAllButon.click();

    expect(result).toBeUndefined();
  });

  it('should remove ingredient', () => {
    const saveButon  = fixture.debugElement.nativeElement.querySelector('#saveRecipeButton');
    let formValue = {};

    component.save.subscribe((data) => formValue = data);
    saveButon.click();

    expect(formValue).toEqual({
      name: '',
    });
  });
});
