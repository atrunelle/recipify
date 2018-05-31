import { Observable, throwError } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'rxjs/add/observable/of';

import { MatDesignModule } from '@/mat-design.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import ToastService from '@/core/toast.service';
import RecipeStore from '@/recipe/store/recipe-store';

import { RecipeCreatorComponent } from './recipe-creator.component';

describe('RecipeCreatorComponent', () => {
  let component: RecipeCreatorComponent;
  let fixture: ComponentFixture<RecipeCreatorComponent>;
  let recipeStoreSpy: {
    get: jasmine.Spy,
    addIngredient: jasmine.Spy,
    removeIngredient: jasmine.Spy,
    removeAllIngredients: jasmine.Spy,
    saveRecipe: jasmine.Spy,
  };
  let toastServiceSpy: {
    show: jasmine.Spy,
  };

  beforeEach(async(() => {
    recipeStoreSpy = jasmine.createSpyObj('RecipeStore', [
      'get',
      'addIngredient',
      'removeIngredient',
      'removeAllIngredients',
      'saveRecipe',
    ]);
    toastServiceSpy = jasmine.createSpyObj('ToastService', [
      'show',
    ]);

    TestBed.configureTestingModule({
      declarations: [ RecipeCreatorComponent ],
      imports: [
        MatDesignModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: RecipeStore, useValue: recipeStoreSpy },
        { provide: ToastService, useValue: toastServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add ingredient', () => {
    recipeStoreSpy.addIngredient.and.returnValue(Observable.of({}));
    const event = {};
    component.addIngredient(event);
    expect(recipeStoreSpy.addIngredient).toHaveBeenCalledWith(event);
  });

  it('should throw error when adding ingredient', () => {
    recipeStoreSpy.addIngredient.and.returnValue(throwError(new Error('add error')));
    const event = {};
    component.addIngredient(event);
    expect(toastServiceSpy.show).toHaveBeenCalledWith('ERROR', 'add error');
  });

  it('should remove ingredient', () => {
    const event = {};
    component.removeIngredient(event);
    expect(recipeStoreSpy.removeIngredient).toHaveBeenCalledWith(event);
  });

  it('should remove all ingredient', () => {
    component.removeAllIngredients();
    expect(recipeStoreSpy.removeAllIngredients).toHaveBeenCalled();
  });

  it('should remove ingredient', () => {
    const event = 'name';
    component.saveRecipe(event);
    expect(recipeStoreSpy.saveRecipe).toHaveBeenCalledWith('name');
  });
});
