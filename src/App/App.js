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
					<Search
						placeholder={'Есть что поесть?'}
						onSearch={this.onSearch}
					/>
					{
						this.state.searchString === '' ?
							<Button
								shape={'circle'}
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
			</Layout>
    );
  }
}

export default App;
