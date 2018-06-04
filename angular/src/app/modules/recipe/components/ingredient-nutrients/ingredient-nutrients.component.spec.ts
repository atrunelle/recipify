import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDesignModule } from '@/mat-design.module';

import { IngredientNutrientsComponent } from './ingredient-nutrients.component';
import RecipeService from '@/recipe/recipe.service';

describe('IngredientNutrientsComponent', () => {
  let component: IngredientNutrientsComponent;
  let fixture: ComponentFixture<IngredientNutrientsComponent>;
  let recipeServiceSpy: {
    getDietLabels: jasmine.Spy,
    getHealthLabels: jasmine.Spy,
    getMacroNutrientsList: jasmine.Spy,
  };

  beforeEach(async(() => {
    recipeServiceSpy = jasmine.createSpyObj('RecipeService', [
      'getDietLabels',
      'getHealthLabels',
      'getMacroNutrientsList',
    ]);
    TestBed.configureTestingModule({
      declarations: [ IngredientNutrientsComponent ],
      imports: [
        MatDesignModule,
      ],
      providers: [
        { provide: RecipeService, useValue: recipeServiceSpy },
      ],
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
  });

  it('should get all labels', () => {
    recipeServiceSpy.getDietLabels.and.returnValue(['Vegetarian', 'Vegan']);
    recipeServiceSpy.getHealthLabels.and.returnValue(['Low fat', 'Low sugar']);

    expect(component.allLabels).toEqual(['Vegetarian', 'Vegan', 'Low fat', 'Low sugar']);
  });

  it('should get macro nutrients data', () => {
    recipeServiceSpy.getMacroNutrientsList.and.returnValue([{
      quantity: 1,
      unit: 'gr',
      label: 'Fat',
    }]);

    expect(component.macroNutrientsData).toEqual([{
      quantity: 1,
      unit: 'gr',
      label: 'Fat',
    }]);
  });
});
