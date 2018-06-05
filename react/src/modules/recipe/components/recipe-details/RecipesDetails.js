import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

class RecipeDetails extends Component {
  render() {
    const ingredientsList = this.props.recipe.ingredients.map((ingredient, index) => 
      <li key={index}>{ingredient.name}</li>
    );
    
    return (
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            component="h2">
            {this.props.recipe.name}
          </Typography>
          <ul>
            {ingredientsList}
          </ul>
        </CardContent>
      </Card>
    );
  }
}

export default RecipeDetails;