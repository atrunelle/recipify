import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';
import Menu from '../menu/Menu';
import { AppBar, Typography } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
    <AppBar 
      className="header" 
      position="static" 
      elevation={0}>
        <Menu></Menu>
        <img src={logo} className="header__logo" alt="logo" />
        <Typography 
          className="header__title"
          variant="display3"
          component="h1">
          Recipify
        </Typography>
        <p className="header__text">Create your own recipes by selecting ingredient and reviewing nutritional values before saving!</p>
    </AppBar>
    );
  }
}

export default Header;