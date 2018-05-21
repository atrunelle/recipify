import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeCreatorComponent } from './recipe-creator/recipe-creator.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

import { SearchIngredientComponent } from './components/search-ingredient/search-ingredient.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { RecipeDataComponent } from './components/recipe-data/recipe-data.component';
import { NutrientsInsightComponent } from './components/nutrients-insight/nutrients-insight.component';
import { NutrientsChartComponent } from './components/nutrients-chart/nutrients-chart.component';

import { MatDesignModule } from '@/mat-design.module';

import RecipeService from './recipe.service';
import NutritionService from './nutrition.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDesignModule,
    FlexLayoutModule,
  ],
  declarations: [
    RecipeCreatorComponent,
    SearchIngredientComponent,
    IngredientsListComponent,
    NutrientsChartComponent,
    NutrientsInsightComponent,
    RecipeDataComponent,
    RecipesListComponent,
  ],
  providers: [
    RecipeService,
    NutritionService,
  ],
  exports: [
    RecipeCreatorComponent,
    RecipesListComponent,
  ]
})
export class RecipeModule {}
