import './RecipeCreator.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import SearchIngredient from '../components/search-ingredient/SearchIngredient';
import IngredientsList from '../components/ingredients-list/IngredientsList';
import IngredientsData from '../components/ingredients-data/IngredientsData';
import * as ingredientsActions from '../store/actions/ingredientsActions';
import * as recipesActions from '../store/actions/recipesActions';
import recipeService from '../recipe.service';
import NutritionMacro from '../components/nutrition-macro/NutritionMacro';
import nutritionService from '../nutrition.service';

class RecipeCreator extends Component {
	addIngredient = (ingredientName, numberOfServings) => {
		this.props.dispatch(ingredientsActions.fetchIngredientPending());

		recipeService.fetchIngredient(ingredientName, numberOfServings)
			.then((data) => {
				this.props.dispatch(ingredientsActions.addIngredient(data));
				this.calculateTotalNutriton();
			})
			.catch((error) => {
				this.props.dispatch(ingredientsActions.fetchIngredientRejected(error));
			});
  }

  removeIngredient = (index) => {
		if (this.props.ingredients.length === 1) {
			this.removeAllIngredients();
		} else {
			this.props.dispatch(ingredientsActions.removeIngredient(index));
			this.calculateTotalNutriton();
		}
  }

  removeAllIngredients = () => {
		this.props.dispatch(ingredientsActions.removeAllIngredients());
		this.props.dispatch(ingredientsActions.resetTotalCalories());
		this.props.dispatch(ingredientsActions.resetTotalWeight());
		this.props.dispatch(ingredientsActions.resetTotalNutritients());
	}
	
	saveRecipe = (name) => {
		const recipe = {
			ingredients: [ ...this.props.ingredients ],
			name,
		};
		this.removeAllIngredients();
		this.props.dispatch(recipesActions.saveRecipe(recipe));
	}

	calculateTotalNutriton = () => {
		const totalCalories = nutritionService.getTotalCalories(this.props.ingredients);
    const totalWeight = nutritionService.getTotalWeight(this.props.ingredients);

		this.props.dispatch(ingredientsActions.updateTotalCalories(totalCalories));
		this.props.dispatch(ingredientsActions.updateTotalWeight(totalWeight));

		const totalNutrients = nutritionService.getTotalNutrients(this.props.ingredients, this.props.totalCalories);
		this.props.dispatch(ingredientsActions.updateTotalNutriton(totalNutrients));
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
						totalWeight={this.props.totalWeight}
						totalCalories={this.props.totalCalories}/>
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
	totalWeight: state.ingredients.totalWeight,
	totalCalories: state.ingredients.totalCalories,
	isFetching: state.ingredients.isFetching,
});

export default connect(mapStateToProps)(RecipeCreator);