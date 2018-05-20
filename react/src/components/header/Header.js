import React, { Component } from 'react';
import logo from './../../images/logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
    <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__title">Find an ingredient</h1>
    </header>
    );
  }
}

export default Header;
