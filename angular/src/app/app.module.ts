import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatChipsModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SearchIngredientComponent } from './search-ingredient/search-ingredient.component';
import { FormsModule } from '@angular/forms';

import RecipeService from './core/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { RecipeDataComponent } from './recipe-data/recipe-data.component';
import { NutrientsChartComponent } from './nutrients-chart/nutrients-chart.component';
import { NutrientsInsightComponent } from './nutrients-insight/nutrients-insight.component';
import NutritionService from './core/nutrition.service';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SearchIngredientComponent,
    IngredientsListComponent,
    RecipeDataComponent,
    NutrientsChartComponent,
    NutrientsInsightComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
  providers: [RecipeService, NutritionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
