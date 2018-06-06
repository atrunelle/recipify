import React, { Component } from "react";
import recipeService from "../../recipe.service";
import { Chip, Typography, Grid } from "@material-ui/core";

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
    if (!this.props.nutrients) return false;
    
    const nutrientsView = this.macroNutrientsData.map((nutrient, index) => {
      const quantity = Math.round(nutrient.quantity);

      return (
        <div key={index}>
          <Typography
            gutterBottom
            component="h3">
            { nutrient.label }
          </Typography>
          <Typography
            gutterBottom
            paragraph
            component="p">
              { quantity } { nutrient.unit }
            </Typography>
        </div>
      );
    });
    const allLabelsView = this.allLabels.map((label, index) => 
      <Chip key={index} label={label}/>
    );

    return (
      <Grid 
        container
        spacing={8}
        alignItems="center"
        justify="center">
        <Grid
          container 
          justify="space-between">
          {nutrientsView}
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center">
          {allLabelsView}
        </Grid>
      </Grid>
    );
  }
}
export default IngredientNutrients;