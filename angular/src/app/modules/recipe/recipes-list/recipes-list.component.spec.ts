import { Observable } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDesignModule } from '@/mat-design.module';

import RecipeStore from '@/recipe/store/recipe-store';
import { RecipesListComponent } from './recipes-list.component';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;
  let recipeStoreSpy: {
    get: jasmine.Spy,
  };

  beforeEach(async(() => {
    recipeStoreSpy = jasmine.createSpyObj('RecipeService', [
      'get',
    ]);

    TestBed.configureTestingModule({
      declarations: [ RecipesListComponent ],
      imports: [
        MatDesignModule,
      ],
      providers: [
        { provide: RecipeStore, useValue: recipeStoreSpy },
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
