import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Button } from 'antd';
import SearchResults from '../Search/SearchResults';

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
					<h1>Есть ЧО поесть?</h1>
				</Header>
				<Content
					className='layout-content'
				>
					<div className={'search-box'}>
						<div className={'preference-box'}>
							<Button className={'preference-button vegeterian'}>
								Вегетарианец
							</Button>
							<Button className={'preference-button muslim'}>
								Мусульманин
							</Button>
							<Button className={'preference-button diabet'}>
								Диабетик
							</Button>
							<Button className={'preference-button gluten'}>
								Не ем глютен
							</Button>
							<Button className={'preference-button lactose'}>
								Не переношу лактозу
							</Button>
						</div>

						<Search
							placeholder={'Чо будем есть?'}
							defaultValue={this.state.searchString}
							onChange={this.onSearch}
						/>
						{
							this.state.searchString === '' ?
								<Button
									shape={'circle'}
																	className={'hz-button'}
									onClick={this.suggestFood}
								>
									ХЗ
								</Button> :
								<SearchResults
									searchString={this.state.searchString}
									className={'search-button'}
								/>
						}
					</div>
				</Content>
				<Footer
					className='layout-footer'
				>
				</Footer>
			</Layout>
    );
  }
}

export default App;
