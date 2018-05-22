import React, { Component } from 'react';
// import './IngredientsData.css';


class IngredientsData extends Component {

    render() {
        if (!this.props.ingredients.healthLabels) return (<div></div>);
        const healthLabels = this.props.ingredients.healthLabels.reduce((acc, h) => {
            return `${acc} <br> ${h}`;
        })
        return(
            <div className="ingredients">
                <h2>{this.props.title}</h2>
                <div>{this.props.ingredients.calories}</div>
                <div>{this.props.ingredients.totalWeight}</div>
                <div>{this.props.ingredients.dietLabels}</div>
                <div>{healthLabels}</div>
                {/* {this.props.ingredients.totalDaily} */}
                {/* {this.props.ingredients.totalNutrients} */}
                <div>{this.props.ingredients.cautions}</div>
                <div>{this.props.ingredients.glycemicIndex}</div>
                {/* {this.props.ingredients.ingredients} */}
            </div>
        );
    }
}

export default IngredientsData;