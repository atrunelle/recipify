import React, { Component } from 'react';
import './IngredientsData.css';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import NutrientDetails from '../nutritient-details/NutrientDetails';

class IngredientsData extends Component {
  render() {
    if (!this.props.totalNutrients || !this.props.totalNutrients.length) return false;

    const nutrientsDetails = this.props.totalNutrients.map((nutrient, index) => 
        <div className="u-text-center" key={index}>
          <NutrientDetails key={index} nutrient={nutrient}/>
        </div>
      );

    return(
      <Card>
        <CardContent>
          <Typography
            gutterBottom 
            variant="headline"
            component="h2">
            Total nutrients
          </Typography>          
          <Typography
            gutterBottom 
            component="h3">
            Calories: { this.props.totalCalories }cal
          </Typography>
          <Typography
            gutterBottom 
            component="h3">
            Total Weight: { this.props.totalWeight }gr
          </Typography>
          <Grid
            container 
            alignItems="flex-end"
            justify="space-between">
            <header>
              <Typography
                gutterBottom
                paragraph
                component="p">
                Total Nutrients
              </Typography>
              <Typography
                gutterBottom
                paragraph
                component="p">
                  Total Daily percentage
              </Typography>
            </header>
            {nutrientsDetails}
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default IngredientsData;