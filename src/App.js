import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Button } from 'antd';

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
