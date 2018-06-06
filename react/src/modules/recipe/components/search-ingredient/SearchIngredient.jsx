import './SearchIngredient.css';

import React, { Component } from 'react';
import { Typography, TextField, Button, Card, CardContent, Grid, CircularProgress } from '@material-ui/core';

class SearchIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredientName: '',
      numberOfServings: 1,
    };
  }

  onIngredientChange = (event) => {
    this.setState({ ingredientName : event.target.value });
  }

  onNumberOfServingsChange = (event) => {
    this.setState({ numberOfServings : event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state.ingredientName, this.state.numberOfServings);
  }
  
  render() {
    let buttonContent = '';

    if (this.props.isFetching) {
      buttonContent = <CircularProgress style={{ color: '#fff' }} />;
    } else {
      buttonContent = 'Add ingredient';
    }

    return (
      <Card className="u-push-top">
        <CardContent>
          <Typography
            gutterBottom 
            variant="headline"
            component="h2">
            What do you have in your fridge?
          </Typography>          
          <form className="search" onSubmit={this.onSubmit}>
            <Grid 
              container
              spacing={8}
              justify="space-between">
              <Grid
                item
                xs={12} 
                sm={6}>
                <TextField
                  fullWidth
                  label="Find an ingredient"
                  value={this.state.ingredientName} 
                  id="ingredientNameInput"
                  placeholder="Ex: 200gr chicken"
                  onChange={this.onIngredientChange}/>
              </Grid>
              <Grid item>
                <TextField
                  label="Number of servings"
                  value={this.state.numberOfServings}
                  id="numberOfServingsInput"
                  onChange={this.onNumberOfServingsChange}/>
              </Grid>
              <Button
                disabled={!this.state.ingredientName}
                type="submit"
                variant="raised"
                color="primary"
                id="submitButton">
                {buttonContent}
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default SearchIngredient;
