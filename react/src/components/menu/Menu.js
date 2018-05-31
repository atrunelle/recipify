import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar'; 
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <Toolbar>
        <nav>
          <Link to="/">
              Create recipe
          </Link>
          <Link to="/recipes/list">
            My recipes
          </Link>
        </nav>
      </Toolbar>
    );
  }
}

export default Menu;