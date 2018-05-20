import React, { Component } from 'react';
import './SearchResults.css';


class SearchResults extends Component {

    render() {
        if (!this.props.results.healthLabels) return (<div></div>);
        const healthLabels = this.props.results.healthLabels.reduce((acc, h) => {
            return `${acc} <br> ${h}`;
        })
        return(
            <div className="results">
                <h2>{this.props.title}</h2>
                <div>{this.props.results.calories}</div>
                <div>{this.props.results.totalWeight}</div>
                <div>{this.props.results.dietLabels}</div>
                <div>{healthLabels}</div>
                {/* {this.props.results.totalDaily} */}
                {/* {this.props.results.totalNutrients} */}
                <div>{this.props.results.cautions}</div>
                <div>{this.props.results.glycemicIndex}</div>
                {/* {this.props.results.ingredients} */}
            </div>
        );
    }
}

export default SearchResults;