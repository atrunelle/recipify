import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar'; 
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <Toolbar>
        <nav>
          <a>
              Create recipe
          </a>
          <a>
            My recipes
          </a>
        </nav>
      </Toolbar>
    );
  }
}

export default Menu;