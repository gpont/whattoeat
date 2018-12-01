import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Button, Menu } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends Component {
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
