import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeCreatorComponent } from './recipe/recipe-creator/recipe-creator.component';
import { RecipesListComponent } from './recipe/recipes-list/recipes-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes/create', pathMatch: 'full' },
  { path: 'recipes/create', component: RecipeCreatorComponent },
  { path: 'recipes/list', component: RecipesListComponent },
  { path: '**', component: RecipeCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
