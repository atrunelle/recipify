import React, { Component } from 'react';
import './IngredientsData.css';

import nutritionService from '../../../core/nutrition.service';
import { MACRO_NUTRIENTS } from '../../../core/edamam.constant';

import NutrientsMacroChart from '../nutrients-macro-chart/NutrientsMacroChart';

class IngredientsData extends Component {

  get totalNutrients () {
    return this.getTotalNutrients();
  }

  get totalCalories () {
    return nutritionService.getTotalCalories(this.props.ingredients);
  }

  get totalWeight () {
    return nutritionService.getTotalWeight(this.props.ingredients);
  }

  getTotalNutrients () {
    return MACRO_NUTRIENTS.map((nutrient) => {
      const totalQuantity = this.totalQuantityFor(nutrient);
      const totalDaily = this.totalDailyIntakeFor(nutrient);

      return {
        label: totalQuantity.label,
        totalQuantity: {
          ...totalQuantity,
        },
        totalDaily: {
          ...totalDaily,
        },
      };
    });
  }

  totalQuantityFor (nutrient) {
    return nutritionService.getTotalForNutrient(this.props.ingredients, 'totalNutrients', nutrient, this.totalCalories);
  }

  totalDailyIntakeFor (nutrient) {
    return nutritionService.getTotalForNutrient(this.props.ingredients, 'totalDaily', nutrient);
  }
  render() {
    if (!this.props.ingredients.length) return (<div></div>);

    const nutrientsDetails = this.totalNutrients.map((nutrient) => 
      <div>
        <h3>{ nutrient.label }</h3>
        <p>{ nutrient.totalQuantity.quantity } { nutrient.totalQuantity.unit }</p>
        <p>{ nutrient.totalDaily.quantity } { nutrient.totalDaily.unit }</p>
      </div>
    );

    return(
      <div>
        <div>
          <h2>Total nutrients</h2>
          <h3>Calories: { this.totalCalories }cal</h3>
          <h3>Total Weight: { this.totalWeight }gr</h3>
          <div>
            <div>
              <p>Total Nutrients</p>
              <p>Total Daily percentage</p>
            </div>
            <div className="u-text-center">
              {nutrientsDetails}
            </div>
          </div>
        </div>
        <div>
          <h2>Macro in recipe</h2>
          <p>Based on 4 calories per gram of carbs and protein, and 9 calories per gram of fat.</p>
          <p>Those numbers are approximation only, as the number of calories per macro change per ingredient and depend on quality and other factor.</p>
          <NutrientsMacroChart nutritionData={this.totalNutrients}></NutrientsMacroChart>
      </div>
    </div>
    );
  }
}

export default IngredientsData;