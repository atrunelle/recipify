import { INutrientsValue } from './../../recipe.interface';
import { Component, OnInit, Input } from '@angular/core';
import { INutrient } from '@/recipe/recipe.interface';
import RecipeService from '@/recipe/recipe.service';

@Component({
  selector: 'app-nutrients-insight',
  templateUrl: './nutrients-insight.component.html',
  styleUrls: ['./nutrients-insight.component.scss']
})

export class NutrientsInsightComponent implements OnInit {
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