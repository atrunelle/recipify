import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientsChartComponent } from './nutrients-chart.component';

describe('NutrientsChartComponent', () => {
  let component: NutrientsChartComponent;
  let fixture: ComponentFixture<NutrientsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrientsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
