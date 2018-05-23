import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModule } from '@/recipe/recipe.module';
import { MatDesignModule } from '@/mat-design.module';

import { IngredientsListComponent } from './ingredients-list.component';

describe('IngredientsListComponent', () => {
  let component: IngredientsListComponent;
  let fixture: ComponentFixture<IngredientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDesignModule,
        RecipeModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
