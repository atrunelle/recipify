import './Search.css';
import React, { Component } from 'react';

import apiService from '../../core/api.service';
import SearchInput from './searchInput/SearchInput';
import SearchResults from './searchResults/SearchResults';

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = {
			searchResults: [],
		}
	}

	getIngredients(data) {
		const MEASUREMENT = 'Kilogram';

		const measureUri = data
			.map((d) => d.measures
				.find(m =>  m.label === MEASUREMENT)
			);

		const ingredients = data.map((item, index) => {
			return {
				quantity: 1,
				measureUri: measureUri[index].uri,
				foodURI: item.food.uri,
			}
		});

		return {
			ingredients,			
		}			

	}

	search = (value) => {
		 apiService.getItem(value).then((data) => {
			const ingredients = this.getIngredients(data.hints);

			apiService.getNutrients(ingredients)
				.then((results) => {
					this.setState({
						value,
						searchResults: results,
					});

				});
		});
	}

	render() {
		return (
			<div className="search">
				<SearchInput setValue={this.search} />
				<SearchResults title={this.state.value} results={this.state.searchResults} />
			</div>
		);
	}
}

export default Search;