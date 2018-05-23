import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModule } from '@/recipe/recipe.module';
import { MatDesignModule } from '@/mat-design.module';

import { IngredientsDataComponent } from './ingredients-data.component';

describe('RecipeDataComponent', () => {
  let component: IngredientsDataComponent;
  let fixture: ComponentFixture<IngredientsDataComponent>;

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
    fixture = TestBed.createComponent(IngredientsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
