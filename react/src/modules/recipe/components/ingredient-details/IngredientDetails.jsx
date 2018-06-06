import React, { Component } from 'react';
import { 
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  IconButton,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IngredientNutrients from '../ingredient-nutrients/IngredientNutrients';
import './IngredientDetails.css';

class IngredientDetails extends Component {

  render() {
    return (
      <ExpansionPanel className="ingredient-details">
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            component="h3">
            {this.props.ingredient.name} 
          </Typography>
          <Typography>
            { this.props.ingredient.nutrients.calories }cal for {this.props.ingredient.nutrients.totalWeight }gr
          </Typography>
          <IconButton
            color="secondary"
            className="ingredient-details__button"
            aria-label="Delete"
            id={`removeButton-${this.props.index}`}
            onClick={() => this.props.remove(this.props.index)}>
            <DeleteIcon />
          </IconButton>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <IngredientNutrients nutrients={this.props.ingredient.nutrients}></IngredientNutrients>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default IngredientDetails;