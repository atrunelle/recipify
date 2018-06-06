import { MatDesignModule } from '@/mat-design.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NutritionMacroComponent } from './nutrition-macro.component';

describe('NutritionMacroComponent', () => {
  let component: NutritionMacroComponent;
  let fixture: ComponentFixture<NutritionMacroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionMacroComponent ],
      imports: [
        MatDesignModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
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
