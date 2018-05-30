import { Observable } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDesignModule } from '@/mat-design.module';

import RecipeService from '@/recipe/recipe.service';
import { RecipesListComponent } from './recipes-list.component';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;
  let recipeServiceSpy: {
    get: jasmine.Spy,
  };

  beforeEach(async(() => {
    recipeServiceSpy = jasmine.createSpyObj('RecipeService', [
      'get',
    ]);

    TestBed.configureTestingModule({
      declarations: [ RecipesListComponent ],
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
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render list of ingredients', () => {
    expect(component).toBeTruthy();
  });
});
