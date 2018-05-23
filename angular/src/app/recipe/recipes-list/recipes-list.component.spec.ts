import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModule } from './../recipe.module';
import { MatDesignModule } from '@/mat-design.module';
import { HttpClientModule } from '@angular/common/http';

import { RecipesListComponent } from './recipes-list.component';
import ToastService from '@/core/toast.service';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDesignModule,
        RecipeModule,
        HttpClientModule,
      ],
      providers: [ToastService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
