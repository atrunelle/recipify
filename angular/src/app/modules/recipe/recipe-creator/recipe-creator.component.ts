import ToastService from '@/core/toast.service';
import { Component, OnInit } from '@angular/core';
import { IIngredient, IRecipe } from '@/modules/recipe/recipe.interface';
import RecipeService from '@/modules/recipe/recipe.service';
import RecipeStore from '@/modules/recipe/store/recipe-store';

@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.scss']
})
export class RecipeCreatorComponent implements OnInit {
  public ingredients$ = this.recipeStore.get<IIngredient[]>('ingredients');
  public totalNutrients$ = this.recipeStore.get<any[]>('totalNutrients');
  public totalWeight$ = this.recipeStore.get<number>('totalWeight');
  public totalCalories$ = this.recipeStore.get<number>('totalCalories');

  constructor(
    private recipeStore: RecipeStore,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
  }


  public addIngredient(event) {
    this.recipeStore
      .addIngredient(event)
      .subscribe(
        () => {},
        (error) => this.toastService.show('ERROR', error.message),
      );
  }

  public removeIngredient(event) {
    this.recipeStore
      .removeIngredient(event);
  }

  public removeAllIngredients() {
    this.recipeStore.removeAllIngredients();
  }

  public saveRecipe (event) {
    this.recipeStore.saveRecipe(event);
  }
}
