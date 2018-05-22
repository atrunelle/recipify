import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RecipeCreator from './recipe/recipe-creator/RecipeCreator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
            <main className="l-container">
              <RecipeCreator />
            </main>
            <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
