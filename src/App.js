import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Button, Menu } from 'antd';
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
                    <Button
                        className={'menu-button'}
                    >
                        Меню
                    </Button>
					Header
				</Header>
				<Content
					className='layout-content'
				>
                    <div className={'preferences-box'}>
                        <Button
                            shape={'circle'}
                            className={'preference-button vegan'}
                        ></Button>
                        <Button
                            shape={'circle'}
                            className={'preference-button muslim'}
                        ></Button>
                        <Button
                            shape={'circle'}
                            className={'preference-button lactose'}
                        ></Button>
                    </div>
					<Search
						placeholder={'Есть что поесть?'}
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
