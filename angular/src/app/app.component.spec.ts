import { TestBed, async } from '@angular/core/testing';

import { RecipeModule } from '@/recipe/recipe.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDesignModule } from '@/mat-design.module';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { HeaderComponent } from '@/components/header/header.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
      ],
      imports: [
        RouterTestingModule,
        RecipeModule,
        MatDesignModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular!');
  // }));
});
