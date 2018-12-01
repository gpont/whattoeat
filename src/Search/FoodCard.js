import React from 'react';
import { Card, Icon, Button } from 'antd';

const { Meta } = Card;

export default function FoodCard(props) {
	return (
		<Card
			className='food-card'
			cover={<img alt={props.title} src={props.img} />}
			actions={[<Icon type="like" />, <Icon type="message" />, <Icon type="share-alt" />]}
		>
			<Meta
				className='food-avatar'
				// avatar={<Avatar src="https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg" />}
				title={props.title}
				description={props.description}
			/>
			<div className="order-wrap">
				<Button
					// shape={'circle'}
					className='order-button'
				>
					Хочу
				</Button>
				<p className="price">
					{props.price} ₽
				</p>
			</div>
		</Card>
	);
};
