import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Button } from 'antd';
import SearchResults from './SearchResults';

const { Header, Footer, Content } = Layout;
const { Search } = Input;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchString: ''
		};

		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(searchString) {
		this.setState({ searchString });
	}

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
                    <div className={'search-box'}>
                    <div className={'preference-box'}>
                        <Button
                            className={'preference-button vegeterian'}
                        ></Button>Вегетарианец
                        <Button
                            className={'preference-button muslim'}
                        ></Button>Мусульманин
                        <Button
                            className={'preference-button diabet'}
                        ></Button>Диабетик
                        <Button
                            className={'preference-button gluten'}
                        ></Button>Не ем глютен
                        <Button
                            className={'preference-button lactose'}
                        ></Button>Не переношу лактозу
                    </div>

					<Search
						placeholder={'Че будем есть?'}
						onSearch={this.onSearch}
					/>
					{
						this.state.searchString === '' ?
							<Button
								shape={'circle'}
                                className={'hz-button'}
							>
								ХЗ
							</Button> :
							<Button><SearchResults
								searchString={this.state.searchString}
								className={'search-button'}
							/>
                            </Button>
					}
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
