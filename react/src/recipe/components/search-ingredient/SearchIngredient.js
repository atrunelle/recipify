import './SearchIngredient.css';

import React, { Component } from 'react';

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
    return (
        <form className="search" onSubmit={this.onSubmit}>
          <label className="search__label">
            What do you want to use?
          </label>
          <input 
            className="search__input" 
            value={this.state.ingredientName} 
            type="text" 
            placeholder="Find an ingredient..."
            onChange={this.onIngredientChange}/>
          <input 
            className="search__input" 
            value={this.state.numberOfServings} 
            type="text" 
            placeholder="Find an ingredient..."
            onChange={this.onNumberOfServingsChange}/>
            <button type="submit">Submit</button>
        </form>
    );
  }
}

export default SearchIngredient;
