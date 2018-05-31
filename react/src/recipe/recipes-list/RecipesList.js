import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipesList extends Component {
  render() {
    if (!this.props.recipes.length) return (<div>
      <p>You don't have any recipes yet</p>
      <a>Create recipes</a>
    </div>);
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => ({
	recipes: state.recipes.recipes,
});

export default connect(mapStateToProps)(RecipesList);