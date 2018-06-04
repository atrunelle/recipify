import './RecipeCreator.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import SearchIngredient from '../components/search-ingredient/SearchIngredient';
import IngredientsList from '../components/ingredients-list/IngredientsList';
import IngredientsData from '../components/ingredients-data/IngredientsData';
import * as ingredientsActions from '../actions/ingredientsActions';
import * as recipesActions from '../actions/recipesActions';
import recipeService from '../../core/recipe.service';
import NutritionMacro from '../components/nutrition-macro/NutritionMacro';
import nutritionService from '../../core/nutrition.service';

class RecipeCreator extends Component {

	get totalCalories () {
    return nutritionService.getTotalCalories(this.props.ingredients);
  }

  get totalWeight () {
    return nutritionService.getTotalWeight(this.props.ingredients);
  }

	addIngredient = (ingredientName, numberOfServings) => {
		this.props.dispatch(ingredientsActions.fetchIngredientPending());

		recipeService.fetchIngredient(ingredientName, numberOfServings)
			.then((data) => {
				this.props.dispatch(ingredientsActions.addIngredient(data));
				this.updateIngredientsTotalNutrition();
			})
			.catch((error) => {
				this.props.dispatch(ingredientsActions.fetchIngredientRejected(error));
			});
  }

  removeIngredient = (index) => {
		this.props.dispatch(ingredientsActions.removeIngredient(index));
		if (!this.props.ingredients.length) {
			this.props.dispatch(ingredientsActions.removeAllIngredientsTotalNutritients());
		}
  }

  removeAllIngredients = () => {
		this.props.dispatch(ingredientsActions.removeAllIngredients());
		this.props.dispatch(ingredientsActions.removeAllIngredientsTotalNutritients());
	}
	
	saveRecipe = (name) => {
		const recipe = {
			ingredients: [ ...this.props.ingredients ],
			name,
		};
		this.removeAllIngredients();
		this.props.dispatch(recipesActions.saveRecipe(recipe));
	}

	updateIngredientsTotalNutrition = () => {
		const totalNutrients = nutritionService.getTotalNutrients(this.props.ingredients, this.totalCalories);
		this.props.dispatch(ingredientsActions.updateIngredientsTotalNutritients(totalNutrients));
	}

	render() {
		return (
			<Grid container spacing={16}>
				<Grid item xs={12}>
					<SearchIngredient
						add={this.addIngredient}
						isFetching={this.props.isFetching}/>
				</Grid>
				<Grid item xs={12}>
					<IngredientsList 
						ingredients={this.props.ingredients}
						remove={this.removeIngredient}
						removeAll={this.removeAllIngredients}
						save={this.saveRecipe}/>
				</Grid>
				<Grid item xs={12}>
					<IngredientsData 
						totalNutrients={this.props.totalNutrients}
						totalWeight={this.totalWeight}
						totalCalories={this.totalCalories}/>
				</Grid>
				<Grid item xs={12}>
					<NutritionMacro totalNutrients={this.props.totalNutrients}/>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	ingredients: state.ingredients.ingredients,
	totalNutrients: state.ingredients.totalNutrients,
	isFetching: state.ingredients.isFetching,
});

export default connect(mapStateToProps)(RecipeCreator);