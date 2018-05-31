import React, { Component } from 'react';
// import './ingredientsList.css';
import IngredientNutrients from '../ingredient-nutrients/IngredientNutrients';

class IngredientsList extends Component {

  render() {
    if (!this.props.ingredients.length) return (<div></div>);
  
    const ingredients = this.props.ingredients.map((ingredient) => 
    <div>
      <h2>{ingredient.name} { ingredient.nutrients.calories }cal for {ingredient.nutrients.totalWeight }gr</h2>
      <IngredientNutrients nutrients={ingredient.nutrients}></IngredientNutrients>
    </div>
    )
    return(
      <div className="results">
        {ingredients}
      </div>
    );
  }
}

export default IngredientsList;