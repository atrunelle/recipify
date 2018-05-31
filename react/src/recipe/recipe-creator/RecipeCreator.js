import './RecipeCreator.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchIngredient from '../components/search-ingredient/SearchIngredient';
import IngredientsList from '../components/ingredients-list/IngredientsList';
import IngredientsData from '../components/ingredients-data/IngredientsData';
import * as ingredientsActions from '../actions/ingredientsActions';
import * as recipesActions from '../actions/recipesActions';
import recipeService from '../../core/recipe.service';

class RecipeCreator extends Component {
	addIngredient = (ingredientName, numberOfServings) => {
		this.props.dispatch(ingredientsActions.fetchIngredientPending());

		recipeService.fetchIngredient(ingredientName, numberOfServings)
			.then((data) => {
				this.props.dispatch(ingredientsActions.addIngredient(data));
			})
			.catch((error) => {
				this.props.dispatch(ingredientsActions.fetchIngredientRejected(error));
			});
  }

  removeIngredient = (index) => {
    this.props.dispatch(ingredientsActions.removeIngredient(index));
  }

  removeAllIngredients = () => {
		this.props.dispatch(ingredientsActions.removeAllIngredients());
	}
	
	saveRecipe = (name) => {
		const recipe = {
			ingredients: [ ...this.props.ingredients ],
			name,
		};
		this.removeAllIngredients();
		this.props.dispatch(recipesActions.saveRecipe(recipe));
	}

	render() {
		return (
			<div>
				<SearchIngredient add={this.addIngredient}/>
				<IngredientsList 
          ingredients={this.props.ingredients}
          remove={this.removeIngredient}
          removeAll={this.removeAllIngredients}
					save={this.saveRecipe}/>
        <IngredientsData ingredients={this.props.ingredients}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	ingredients: state.ingredients.ingredients,
});

export default connect(mapStateToProps)(RecipeCreator);