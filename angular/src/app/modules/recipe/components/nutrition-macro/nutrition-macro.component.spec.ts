import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionMacroComponent } from './nutrition-macro.component';

describe('NutritionMacroComponent', () => {
  let component: NutritionMacroComponent;
  let fixture: ComponentFixture<NutritionMacroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionMacroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionMacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
