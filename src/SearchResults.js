import React, { Component } from 'react';
import DB from './fixtures.js';

class SearchResults extends Component {
	constructor(props) {
		super(props);

		const selector = new RegExp(props.searchString);
		this.state = {
			searchString: props.searchString,
			items: DB.data.filter((item) => item.description.match (selector) || item.title.match (selector))
		};
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		if (nextProps.searchString !== this.state.searchString) {
			this.search(nextProps.searchString);
		}
	}

	search(searchString) {
		const selector = new RegExp(searchString);
		this.setState({
			searchString,
			items: DB.data.filter((item) => item.description.match (selector) || item.title.match (selector))
		});
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
