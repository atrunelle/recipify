import { INutrientsValue } from './../../recipe.interface';
import { Component, OnInit, Input } from '@angular/core';
import { INutrient } from '@/modules/recipe/recipe.interface';
import RecipeService from '@/modules/recipe/recipe.service';

@Component({
  selector: 'app-ingredient-nutrients',
  templateUrl: './ingredient-nutrients.component.html',
  styleUrls: ['./ingredient-nutrients.component.scss']
})

export class IngredientNutrientsComponent implements OnInit {
  @Input()
  public nutrients: INutrient;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  get allLabels (): string[] {
    const dietsLabels = this.recipeService.getDietLabels(this.nutrients.dietLabels);
    const healthLabels = this.recipeService.getHealthLabels(this.nutrients.healthLabels);

    return dietsLabels.concat(healthLabels);
  }

  get macroNutrientsData (): INutrientsValue[] {
    return this.recipeService.getMacroNutrientsList(this.nutrients.totalNutrients);
  }
}
