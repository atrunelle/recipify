import { Routes, RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BarGraphComponent } from '@/components/bar-graph/bar-graph.component';
import { CircleIconComponent } from '@/components/circle-icon/circle-icon.component';

import { RecipeCreatorComponent } from './recipe-creator/recipe-creator.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

import { SearchIngredientComponent } from './components/search-ingredient/search-ingredient.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientsDataComponent } from './components/ingredients-data/ingredients-data.component';
import { IngredientNutrientsComponent } from './components/ingredient-nutrients/ingredient-nutrients.component';
import { NutrientsMacroChartComponent } from './components/nutrients-macro-chart/nutrients-macro-chart.component';

import { MatDesignModule } from '@/mat-design.module';

import RecipeStore from './store/recipe-store';
import RecipeService from './recipe.service';
import NutritionService from './nutrition.service';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { NutritionMacroComponent } from './components/nutrition-macro/nutrition-macro.component';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes/create', pathMatch: 'full' },
  { path: 'recipes/create', component: RecipeCreatorComponent },
  { path: 'recipes/list', component: RecipesListComponent },
  { path: '**', component: RecipeCreatorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
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
    RecipeDetailsComponent,
    NutritionMacroComponent,
    IngredientDetailsComponent,
    CircleIconComponent,
    BarGraphComponent,
  ],
  providers: [
    RecipeService,
    NutritionService,
    RecipeStore,
  ],
  exports: [
    RouterModule,
    RecipeCreatorComponent,
    RecipesListComponent,
  ]
})
export class RecipeModule {}
