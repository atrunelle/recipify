import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

import { HttpClientModule } from '@angular/common/http';

import { RecipeModule } from '@/modules/recipe/recipe.module';
import { MatDesignModule } from '@/mat-design.module';

import ToastService from '@/core/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    MatDesignModule,
    RecipeModule
  ],
  providers: [ ToastService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
