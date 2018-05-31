import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import Store from '@/core/store';

import { IRecipe, IIngredient } from '@/recipe/recipe.interface';
import RecipeService from '@/recipe/recipe.service';
import ToastService from '@/core/toast.service';

interface IRecipeState {
  recipes: IRecipe[];
  ingredients: IIngredient[];
}

const state: IRecipeState = {
  recipes: [],
  ingredients: [],
};

@Injectable()
class RecipeStore extends Store<IRecipeState> {
  constructor(
    private recipeService: RecipeService,
    private toastService: ToastService,
  ) {
    super(state);
  }

  addIngredient({ ingredient, numberOfServing }: { ingredient: string, numberOfServing: string }) {
    return this.recipeService.getIngredientNutrition(ingredient, parseInt(numberOfServing, 0))
      .pipe(map((ingredientData) => {
        this.setState({
          ...this.state,
          ingredients: [
            ...this.state.ingredients,
            ingredientData,
          ],
        });
      }));
  }

  public removeIngredient(index) {
    if (this.state.ingredients.length === 1) {
      this.removeAllIngredients();
    } else {
      this.setState({
       ...this.state,
       ingredients: [
         ...this.state.ingredients.filter(((item, itemIndex) => itemIndex !== index)),
       ],
     });
    }
  }

  public removeAllIngredients() {
    this.setState({
      ...this.state,
      ingredients: [],
    });
  }

  public saveRecipe({ name }: { name: string }) {
    const defaultName = `Recipe ${this.state.recipes.length + 1}`;
    const recipeName = name || defaultName;

    this.setState({
      ...this.state,
      recipes: [
        ...this.state.recipes,
        {
          name: recipeName,
          ingredients: this.state.ingredients,
        },
      ],
    });
    this.removeAllIngredients();
    this.toastService.show('SUCCESS', `${recipeName} was succefully saved!`);
  }
}

export default RecipeStore;
