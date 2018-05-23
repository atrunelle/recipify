import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModule } from '@/recipe/recipe.module';
import { MatDesignModule } from '@/mat-design.module';
import { HttpClientModule } from '@angular/common/http';
import ToastService from '@/core/toast.service';

import { IngredientNutrientsComponent } from './ingredient-nutrients.component';

describe('IngredientNutrientsComponent', () => {
  let component: IngredientNutrientsComponent;
  let fixture: ComponentFixture<IngredientNutrientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDesignModule,
        RecipeModule,
        HttpClientModule,
      ],
      providers: [ToastService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientNutrientsComponent);
    component = fixture.componentInstance;
    component.nutrients = {
      calories: 100,
      cautions: [],
      dietLabels: [],
      healthLabels: [],
      ingredients: [],
      totalNutrients: {},
      totalWeight: 100,
      uri: '',
      yield: 1,
      totalDaily: {
        FAT: {
          label: '',
          quantity: 100,
          unit: 'gr',
        },
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
