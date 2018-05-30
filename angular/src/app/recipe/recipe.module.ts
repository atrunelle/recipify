import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeCreatorComponent } from './recipe-creator/recipe-creator.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

import { SearchIngredientComponent } from './components/search-ingredient/search-ingredient.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientsDataComponent } from './components/ingredients-data/ingredients-data.component';
import { IngredientNutrientsComponent } from './components/ingredient-nutrients/ingredient-nutrients.component';
import { NutrientsMacroChartComponent } from './components/nutrients-macro-chart/nutrients-macro-chart.component';

import { MatDesignModule } from '@/mat-design.module';

import RecipeStore from './store/recipeStore';
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
    NutrientsMacroChartComponent,
    IngredientNutrientsComponent,
    IngredientsDataComponent,
    RecipesListComponent,
  ],
  providers: [
    RecipeService,
    NutritionService,
    RecipeStore,
  ],
  exports: [
    RecipeCreatorComponent,
    RecipesListComponent,
  ]
})
export class RecipeModule {}
