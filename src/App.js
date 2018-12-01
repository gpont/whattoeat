import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Button, Card, Avatar, Icon } from 'antd';

const { Meta } = Card;

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
			<Layout>
				<Header
					className='layout-header'
				>
					Header
				</Header>
				<Content
					className='layout-content'
				>
					<Input
						placeholder={'Есть что поесть?'}
					/>
					<Button
						shape={'circle'}
                        className={'hz-button'}
					>
						ХЗ
					</Button>
					<div className="search-result">
						<Card
							className={'food-card'}
							style={{ width: 300, 'padding-bottom': 50 }}
							cover={<img alt="example" src="https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg" />}
							actions={[<Icon type="like" />, <Icon type="message" />, <Icon type="share-alt" />]}
						>
							<Meta
								className={'food-avatar'}
								// avatar={<Avatar src="https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg" />}
								title="Вкусный бургер"
								description="Из макдака"
							/>
							<div className="order-wrap">
								<Button
									// shape={'circle'}
									className={'order-button'}
								>
									Заказать
								</Button>
								<p className="price">
									10 rub
								</p>
							</div>
						</Card>
						<Card
							style={{ width: 300 }}
							cover={<img alt="example" src="https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg" />}
							actions={[<Icon type="like" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
						>
							<Meta
								className={'food-avatar'}
								// avatar={<Avatar src="https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg" />}
								title="Вкусный бургер"
								description="Из макдака"
							/>
						</Card>

					</div>
				</Content>
				<Footer
					className='layout-footer'
				>
					Footer
				</Footer>
			</Layout>
    );
  }
}

export default App;
