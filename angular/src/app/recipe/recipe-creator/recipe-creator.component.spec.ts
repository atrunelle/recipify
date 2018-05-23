import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModule } from '@/recipe/recipe.module';
import { MatDesignModule } from '@/mat-design.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import ToastService from '@/core/toast.service';

import { RecipeCreatorComponent } from './recipe-creator.component';

describe('RecipeCreatorComponent', () => {
  let component: RecipeCreatorComponent;
  let fixture: ComponentFixture<RecipeCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDesignModule,
        NoopAnimationsModule,
        RecipeModule,
        HttpClientModule,
      ],
      providers: [ToastService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
