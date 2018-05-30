import ToastService from '@/core/toast.service';
import { Component, OnInit } from '@angular/core';
import { IIngredient, IRecipe } from '@/recipe/recipe.interface';
import RecipeService from '@/recipe/recipe.service';

@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.scss']
})
export class RecipeCreatorComponent implements OnInit {
  public ingredients$ = this.recipeService.get<IIngredient[]>('ingredients');

  constructor(
    private recipeService: RecipeService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
  }

  public addIngredient(event) {
    this.recipeService
      .addIngredient(event)
      .subscribe(
        () => {},
        (error) => this.toastService.show('ERROR', error.message),
      );
  }

  public removeIngredient(event) {
    this.recipeService
      .removeIngredient(event);
  }

  public removeAllIngredients() {
    this.recipeService.removeAllIngredients();
  }

  public saveRecipe (event) {
    this.recipeService.saveRecipe(event);
  }
}
