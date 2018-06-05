import React, { Component } from 'react';
import NutrientsMacroChart from '../nutrients-macro-chart/NutrientsMacroChart';
import { Card, CardContent, Typography } from '@material-ui/core';

class NutritionMacro extends Component {
  render() {
    if (!this.props.totalNutrients.length) return '';

    return (
      <Card>
        <CardContent>
          <Typography
            gutterBottom 
            variant="headline"
            component="h2">
            Macro in recipe
          </Typography>          
          <Typography
            gutterBottom 
            paragraph
            component="p">
              Based on 4 calories per gram of carbs and protein, and 9 calories per gram of fat.
          </Typography>
          <Typography
            gutterBottom 
            paragraph
            component="p">
            Those numbers are approximation only, as the number of calories per macro change per ingredient and depend on quality and other factor.
          </Typography>
          <NutrientsMacroChart nutritionData={this.props.totalNutrients}></NutrientsMacroChart>
        </CardContent>
      </Card>
    );
  }
}

export default NutritionMacro;