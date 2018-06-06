import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MatDesignModule } from '@/mat-design.module';

import { IngredientsDataComponent } from './ingredients-data.component';

describe('IngredientsDataComponent', () => {
  let component: IngredientsDataComponent;
  let fixture: ComponentFixture<IngredientsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientsDataComponent],
      imports: [
        MatDesignModule,
      ],
      providers: [
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should exist', () => {
    expect(component).toBeTruthy();
  });
});
