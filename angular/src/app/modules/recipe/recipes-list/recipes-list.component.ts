import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IRecipe } from '@/modules/recipe/recipe.interface';
import RecipeStore from '@/modules/recipe/store/recipe-store';

@Component({
  selector: 'app-recipes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes$ = this.recipeStore.get<IRecipe[]>('recipes');

  constructor(
    private recipeStore: RecipeStore,
  ) { }

  ngOnInit() {
  }
}