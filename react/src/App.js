import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RecipeCreator from './modules/recipe/recipe-creator/RecipeCreator';
import RecipesList from './modules/recipe/recipes-list/RecipesList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
          <main className="l-container">
            <Route exact path="/" component={RecipeCreator} />
            <Route path="/recipes/list" component={RecipesList} />
          </main>
          <Footer />
      </div>
    );
  }
}

export default App;
