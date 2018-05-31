import React, { Component } from "react";
import recipeService from "../../../core/recipe.service";

class IngredientNutrients extends Component {

  get allLabels () {
    const dietsLabels = recipeService.getDietLabels(this.props.nutrients.dietLabels);
    const healthLabels = recipeService.getHealthLabels(this.props.nutrients.healthLabels);
    
    return dietsLabels.concat(healthLabels);
  }
  
  get macroNutrientsData () {
    return recipeService.getMacroNutrientsList(this.props.nutrients.totalNutrients);
  }

  render() {
    const nutrientsView = this.macroNutrientsData.map((nutrient) => 
      <div>
          <h3>{ nutrient.label }</h3>
          <p>{ nutrient.quantity } { nutrient.unit }</p>
      </div>
    )
    const allLabelsView = this.allLabels.map((label) => <li>{label}</li>);

    return (
      <div>
        <div className="u-text-center">
          {nutrientsView}
        </div>
        <ul>
          {allLabelsView}
        </ul>
      </div>
    );
  }
}
export default IngredientNutrients;