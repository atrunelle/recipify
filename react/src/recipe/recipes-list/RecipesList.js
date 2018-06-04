import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import recipesIcon from '../../assets/images/recipes.svg';

import './RecipesList.css';
import RecipeDetails from '../components/recipe-details/RecipesDetails';
import CircleIcon from '../../components/circle-icon/CircleIcon';

class RecipesList extends Component {
  render() {
    let render;
    
    if (!this.props.recipes.length) {
      render = (
        <div className="u-text-center">
          <CircleIcon
            icon={recipesIcon}
            alt="recipes icon"/>
          <Typography
            gutterBottom
            variant="headline"
            component="h2">
            No recipes yet
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            paragraph={true}
            component="p">
            Do not forget to save recipes when you play with ingredients. Once saved, they will show here.
          </Typography>
          <Button
            variant="raised"
            component={Link}
            to="/">
            Create recipe
          </Button>
        </div>
      );
    } else {
      const recipesList = this.props.recipes.map((recipe, index) => 
        <Grid
          key={index}
          item
          xs={12}
          sm={4}>
            <RecipeDetails recipe={recipe}/>
        </Grid>
      );

      render = (
        <Grid container spacing={8}>
          {recipesList}
        </Grid>
      )
    }

    return (
      <div className="u-push-top">
        {render}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	recipes: state.recipes.recipes,
});

export default connect(mapStateToProps)(RecipesList);