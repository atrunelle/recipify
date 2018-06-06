import React, { Component } from 'react';
import './NutrientsMacroChart.css';
import BarGraph from '../../../../components/bar-graph/BarGraph';

class NutrientsMacroChart extends Component {

  render() {
    if (!this.props.nutritionData) return false;
    const bars = this.props.nutritionData.map((data, index) => {
      const percentage = data.totalQuantity.percentage;
      const label = data.totalQuantity.label;

      return (
        <BarGraph
          key={index}
          label={label}
          percentage={percentage}/>
      )
    });
    return (
      <div className="nutrients-macro-chart">
        {bars}
      </div>
    );
  }
}

export default NutrientsMacroChart;