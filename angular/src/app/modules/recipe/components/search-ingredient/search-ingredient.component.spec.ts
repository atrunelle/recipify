import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchIngredientComponent } from './search-ingredient.component';

import { RecipeModule } from '@/modules/recipe/recipe.module';
import { MatDesignModule } from '@/mat-design.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

describe('SearchIngredientComponent', () => {
  let component: SearchIngredientComponent;
  let fixture: ComponentFixture<SearchIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDesignModule,
        NoopAnimationsModule,
        RecipeModule,
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should submit form', () => {
    let formValue = {};
    component.form.setValue({
      numberOfServing: '2',
      ingredient: 'name',
    });

    component.add.subscribe((data) => formValue = data);
    component.onSubmit();
    expect(formValue).toEqual({
      numberOfServing: '2',
      ingredient: 'name',
    });
    expect(component.form.value).toEqual({
      numberOfServing: '1',
      ingredient: '',
    });
  });
});
