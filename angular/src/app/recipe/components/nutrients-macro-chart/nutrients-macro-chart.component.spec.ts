import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
      declarations: [ NutrientsMacroChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientsMacroChartComponent);
    component = fixture.componentInstance;
    component.nutritionData = mockNutritionData;
    fixture.detectChanges();
  });

  it('should redraw on changes', () => {
    spyOn(component, 'clearChart');
    spyOn(component, 'drawChart');
    component.ngOnChanges();

    expect(component.clearChart).toHaveBeenCalled();
    expect(component.drawChart).toHaveBeenCalled();
  });

  it('should clear chart', () => {
    let svg  = fixture.debugElement.nativeElement.querySelector('svg');

    expect(svg).toBeDefined();
    component.clearChart();

    svg  = fixture.debugElement.nativeElement.querySelector('svg');

    expect(svg).toBeNull();
  });
});
