import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IRecipe } from '@/recipe/recipe.interface';
import RecipeService from '@/recipe/recipe.service';

@Component({
  selector: 'app-recipes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes$ = this.recipeService.get<IRecipe[]>('recipes');

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
  }
}
