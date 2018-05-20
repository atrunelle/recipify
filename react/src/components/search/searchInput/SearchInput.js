import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          value: '',
        };
    }

    handleChange= (event) => {
        this.setState({ value : event.target.value });
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.setValue(this.state.value);
    }
    
  render() {
    return (
        <form className="search" onSubmit={this.handleSubmit}>
          <label className="search__label">
            What do you want to use?
          </label>
          <input 
            className="search__input" 
            value={this.state.value} 
            type="text" 
            placeholder="Find an ingredient..."
            onChange={this.handleChange}/>
        </form>
    );
  }
}

export default SearchInput;
