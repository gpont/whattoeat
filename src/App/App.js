import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Button } from 'antd';
import SearchResults from '../Search/SearchResults';
import ShopingCart from '../ShopingCart/ShopingCart';

const { Header, Footer, Content } = Layout;
const { Search } = Input;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchString: ''
		};

		this.onSearch = this.onSearch.bind(this);
		this.suggestFood = this.suggestFood.bind(this);
		this.openCart = this.openCart.bind(this);
	}

	onSearch(searchEvent) {
		console.log(this.state.searchString);
		this.setState({
			searchString: searchEvent.target.value
		});
	}

	suggestFood() {
		console.log(this.state.searchString);
		this.setState({
			searchString: SearchResults.suggestFood()
		});
	}

	openCart() {
		this.setState({

		});
	}

  render() {
		console.log(this.state.searchString);
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
					<Search
						placeholder={'Есть чо поесть?'}
						defaultValue={this.state.searchString}
						onChange={this.onSearch}
					/>
					{
						this.state.searchString === '' ?
							<Button
								shape={'circle'}
								onClick={this.suggestFood}
							>
								ХЗ
							</Button> :
							<SearchResults
								searchString={this.state.searchString}
							/>
					}
				</Content>
				<Footer
					className='layout-footer'
				>
					Footer
				</Footer>
				<ShopingCart/>
			</Layout>
    );
  }
}

export default App;
