import React, { Component } from 'react';
// import './ingredientsList.css';


class IngredientsList extends Component {

    render() {
        if (!this.props.ingredients.healthLabels) return (<div></div>);
        const healthLabels = this.props.ingredients.healthLabels.reduce((acc, h) => {
            return `${acc} <br> ${h}`;
        })
        return(
            <div className="results">
                <h2>{this.props.title}</h2>
                <div>{this.props.ingredients.calories}</div>
                <div>{this.props.ingredients.totalWeight}</div>
                <div>{this.props.ingredients.dietLabels}</div>
                <div>{healthLabels}</div>
                {/* {this.props.results.totalDaily} */}
                {/* {this.props.results.totalNutrients} */}
                <div>{this.props.ingredients.cautions}</div>
                <div>{this.props.ingredients.glycemicIndex}</div>
                {/* {this.props.results.ingredients} */}
            </div>
        );
    }
}

export default IngredientsList;