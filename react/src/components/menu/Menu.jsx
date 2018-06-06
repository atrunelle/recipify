import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Button, Toolbar, Grid } from '@material-ui/core';

class Menu extends Component {
  render() {
    return (
      <Toolbar>
        <Grid
        container
        justify="flex-end">
          <nav>
            <Button 
              component={Link}
              to="/">
              Create recipe
            </Button>
            <Button
              component={Link}
              to="/recipes/list">
              My recipes
            </Button>
          </nav>
        </Grid>
      </Toolbar>
    );
  }
}

export default Menu;