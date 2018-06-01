import React, { Component } from 'react';
import './NutrientsMacroChart.css';

class NutrientsMacroChart extends Component {

  render() {
    const bars = this.props.nutritionData.map((data, index) => {
      const percentage = data.totalQuantity.percentage;
      const label = data.totalQuantity.label;

      if (!percentage) return ('');

      return (
        <div
          key={index}
          style={{width : `${percentage}%`}}
          className={`graph__bar graph__bar--${label.toLowerCase()}`}>
          <p>{label} {percentage}%</p>
        </div>
      )
    });
    return (
      <div className="graph">
        {bars}
      </div>
    );
  }
}

export default NutrientsMacroChart;