import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientNutrientsComponent } from './ingredient-nutrients.component';

describe('IngredientNutrientsComponent', () => {
  let component: IngredientNutrientsComponent;
  let fixture: ComponentFixture<IngredientNutrientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientNutrientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientNutrientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
