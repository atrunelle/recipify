import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModule } from '@/recipe/recipe.module';
import { MatDesignModule } from '@/mat-design.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchIngredientComponent } from './search-ingredient.component';

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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
