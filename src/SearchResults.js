import React, { Component } from 'react';
import DB from './fixtures.js';

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

	render() {
		return (
			<div>
				{this.state.items.map((item) => (<div key={item.title}>{item.title}</div>))}
			</div>
		);
	}
}

export default SearchResults;
