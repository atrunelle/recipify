import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientsInsightComponent } from './nutrients-insight.component';

describe('NutrientsInsightComponent', () => {
  let component: NutrientsInsightComponent;
  let fixture: ComponentFixture<NutrientsInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrientsInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientsInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
