import React, { Component } from 'react';
import { 
  TextField, Button, Typography, Grid,
} from '@material-ui/core';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import './IngredientsList.css';

class IngredientsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeName: '',
    };
  }

  onRecipeNameChange = (event) => {
    this.setState({ recipeName : event.target.value });
  }

  save = () => {
    this.props.save(this.state.recipeName);
  }

  render() {
    if (!this.props.ingredients) return false;
  
    const ingredientsList = this.props.ingredients.map((ingredient, index) => 
      <IngredientDetails key={index} index={index} ingredient={ingredient} remove={this.props.remove}/>
    )
    
    return(
      <Grid 
        container
        direction="column">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Typography
            gutterBottom 
            variant="headline"
            component="h2">
            Your recipe ingredients list
          </Typography>          
          <form>
            <TextField
              label="Recipe name"
              value={this.state.recipeName}
              id="recipeNameInput"
              onChange={this.onRecipeNameChange}
            />
          </form>
        </Grid>
        <Grid
          item
          className="ingredients-list__list">
          {ingredientsList}
        </Grid>
        <Grid
          container
          spacing={8}
          justify="flex-end">
          <Grid item>
            <Button
              onClick={this.props.removeAll}
              id="removeAllButton">
              Remove all ingredients
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="raised"
              color="primary"
              id="saveButton"
              onClick={this.save}>
              Save recipe
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default IngredientsList;