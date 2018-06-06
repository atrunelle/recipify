import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CircleIconComponent } from '@/components/circle-icon/circle-icon.component';
import { Observable } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDesignModule } from '@/mat-design.module';

import RecipeStore from '@/modules/recipe/store/recipe-store';
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
      schemas: [NO_ERRORS_SCHEMA],
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
