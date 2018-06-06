import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NutrientsMacroChartComponent } from './nutrients-macro-chart.component';

describe('NutrientsMacroChartComponent', () => {
  let component: NutrientsMacroChartComponent;
  let fixture: ComponentFixture<NutrientsMacroChartComponent>;

  const mockNutritionData = [{
    totalQuantity: {
      label: 'Protein',
      percentage: 50,
    },
  }, {
    totalQuantity: {
      label: 'Fat',
      percentage: 10,
    },
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrientsMacroChartComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientsMacroChartComponent);
    component = fixture.componentInstance;
    component.nutritionData = mockNutritionData;
    fixture.detectChanges();
  });


  it('should exist', () => {
    expect(component).toBeTruthy();
  });
});
