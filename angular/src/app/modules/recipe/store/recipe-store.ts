import NutritionService from '@/modules/recipe/nutrition.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import Store from '@/core/store';

import { IRecipe, IIngredient } from '@/modules/recipe/recipe.interface';
import RecipeService from '@/modules/recipe/recipe.service';
import ToastService from '@/core/toast.service';

interface IRecipeState {
  recipes: IRecipe[];
  ingredients: IIngredient[];
  totalNutrients: any[];
  totalWeight: number;
  totalCalories: number;
}

const state: IRecipeState = {
  recipes: [],
  ingredients: [],
  totalNutrients: [],
  totalWeight: 0,
  totalCalories: 0,
};

@Injectable()
class RecipeStore extends Store<IRecipeState> {
  constructor(
    private recipeService: RecipeService,
    private toastService: ToastService,
    private nutritionService: NutritionService,
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
        this.calculateTotalNutrients();
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
      this.resetTotalNutrients();
    }
  }

  public removeAllIngredients() {
    this.setState({
      ...this.state,
      ingredients: [],
    });
    this.resetTotalNutrients();
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

  public calculateTotalNutrients() {
    this.calculateTotalCalories();
    this.calculateTotalWeight();
    this.setState({
      ...this.state,
      totalNutrients: this.nutritionService.getTotalNutrients(
        this.state.ingredients,
        this.state.totalCalories
      ),
    });
  }

  public calculateTotalWeight() {
    const totalWeight = this.state.ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.totalWeight + sum;
    }, 0);
    this.setState({
      ...this.state,
      totalWeight,
    });
  }

  public calculateTotalCalories() {
    const totalCalories =  this.state.ingredients.reduce((sum, ingredient) => {
      return ingredient.nutrients.calories + sum;
    }, 0);

    this.setState({
      ...this.state,
      totalCalories,
    });
  }

  public resetTotalWeight() {
    this.setState({
      ...this.state,
      totalWeight: 0,
    });
  }

  public resetTotalCalories() {
    this.setState({
      ...this.state,
      totalCalories: 0,
    });
  }

  public resetTotalNutrients() {
    this.resetTotalCalories();
    this.resetTotalWeight();
    this.setState({
      ...this.state,
      totalNutrients: [],
    });
  }
}

export default RecipeStore;
