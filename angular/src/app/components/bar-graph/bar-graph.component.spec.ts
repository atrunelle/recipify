import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphComponent } from './bar-graph.component';

describe('BarGraphComponent', () => {
  let component: BarGraphComponent;
  let fixture: ComponentFixture<BarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphComponent);
    component = fixture.componentInstance;
    component.label = 'Fat';
    component.percentage = 10;
    fixture.detectChanges();
  });

  it('should render', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('p').innerHTML).toBe('Fat 10%');
  });
});
