import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class NutrientDetails extends Component {
  render() {
    if (!this.props.nutrient.totalQuantity.quantity) return '';
    const totalQuantityQuantity = Math.round(this.props.nutrient.totalQuantity.quantity);
    const totalDailyQuantity = Math.round(this.props.nutrient.totalDaily.quantity);

    return (
      <div>
          <Typography
            gutterBottom
            component="h3">
            { this.props.nutrient.label } 
          </Typography>
          <Typography
            gutterBottom
            paragraph
            component="p">
            { totalQuantityQuantity } { this.props.nutrient.totalQuantity.unit }
          </Typography>
          <Typography
            gutterBottom
            paragraph
            component="p">
            { totalDailyQuantity } { this.props.nutrient.totalDaily.unit }
          </Typography>
      </div>
    );
  }
}

export default  NutrientDetails;