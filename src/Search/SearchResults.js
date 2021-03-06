import React, { Component } from 'react';
import DB from '../fixtures/fixtures.js';
import FoodCard from './FoodCard';

class SearchResults extends Component {
	constructor(props) {
		super(props);

		this.state = SearchResults.search(props.searchString);
	}

	static getDerivedStateFromProps(props, state) {
		return props.searchString !== state.searchString ?
			SearchResults.search(props.searchString) :
			null;
	}

	static search(searchString) {
		const selectorRegExp = new RegExp(searchString);
		const selector = (item) => item.description.match(selectorRegExp) || item.title.match(selectorRegExp);
		return {
			searchString,
			items: DB.data.filter(selector)
		};
	}

	static suggestFood() {
		return DB.data[Math.floor(Math.random() * DB.data.length)].title;
	}

	renderCard(item) {
		return (
			<FoodCard
				title={item.title}
				img={item.img}
				description={item.description}
				price={item.price}
			/>
		);
	}

	render() {
		return (
			<div className='search-result'>
				{this.state.items.map(item => (
					<div key={item.title + String(Math.random())} className="card-wrapper">
						{this.renderCard(item)}
					</div>
				))}
			</div>
		);
	}
}

export default SearchResults;
