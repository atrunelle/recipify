import './RecipeCreator.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiService from '../../core/api.service';

import SearchIngredient from '../components/search-ingredient/SearchIngredient';
import IngredientsList from '../components/ingredients-list/IngredientsList';
import IngredientsData from '../components/ingredients-data/IngredientsData';
import * as ingredients from '../actions/ingredientsActions';

class RecipeCreator extends Component {

	getIngredients(data) {
		const MEASUREMENT = 'Kilogram';

		const measureUri = data
			.map((d) => d.measures
				.find(m =>  m.label === MEASUREMENT)
			);

		const ingredients = data.map((item, index) => {
			return {
				quantity: 1,
				measureUri: measureUri[index].uri,
				foodURI: item.food.uri,
			}
		});

		return {
			ingredients,			
		}			
	}

	search(value) {
		 apiService.getItem(value).then((data) => {
			const ingredients = this.getIngredients(data.hints);

			apiService.getNutrients(ingredients)
				.then((results) => {
					this.setState({
						value,
						ingredients: results,
					});

				});
		});
  }

  addIngredient = () => {
    this.props.dispatch(ingredients.addIngredient());
  }

  removeIngredient = (index) => {
    this.props.dispatch(ingredients.removeIngredient(index));
  }

  removeAllIngredients = () => {
    this.props.dispatch(ingredients.removeAllIngredients());
  }

	render() {
		return (
			<div>
				<SearchIngredient add={this.addIngredient}/>
				<IngredientsList 
          ingredients={this.props.ingredients}
          remove={this.removeIngredient}
          removeAll={this.removeAllIngredients}/>
        <IngredientsData ingredients={this.props.ingredients}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	ingredients: state.ingredients,
});

export default connect(mapStateToProps)(RecipeCreator);