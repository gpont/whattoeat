import React, { Component } from 'react';
import { Button, Card, Icon } from 'antd';
import DB from './fixtures.js';

const { Meta } = Card;

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

	renderCard(item) {
		return (
			<Card
				className='food-card'
				cover={<img alt={item.title} src={item.img} />}
				actions={[<Icon type="like" />, <Icon type="message" />, <Icon type="share-alt" />]}
			>
				<Meta
					className='food-avatar'
					// avatar={<Avatar src="https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg" />}
					title={item.title}
					description={item.description}
				/>
				<div className="order-wrap">
					<Button
						// shape={'circle'}
						className='order-button'
					>
						Хочу
					</Button>
					<p className="price">
						{item.price}₽
					</p>
				</div>
			</Card>
		);
	}

	render() {
		return (
			<div className='search-result'>
				{this.state.items.map(item => this.renderCard(item))}
				<span>Чо еще есть?</span>
			</div>
		);
	}
}

export default SearchResults;
