import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientsMacroChartComponent } from './nutrients-macro-chart.component';

describe('NutrientsMacroChartComponent', () => {
  let component: NutrientsMacroChartComponent;
  let fixture: ComponentFixture<NutrientsMacroChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrientsMacroChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientsMacroChartComponent);
    component = fixture.componentInstance;
    component.nutritionData = [{
      totalQuantity: {
        label: '',
      },
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
