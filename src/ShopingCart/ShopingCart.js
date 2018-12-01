import React, { Component } from 'react';

class ShopingCart extends Component {
    renderCard() {
        return (
            <div>
                test
            </div>
        );
    }
    render() {
        return (
            <div className='cart'>
                <span>Чо еще есть?</span>
                {this.renderCard()}
            </div>
        );
    }
}

export default ShopingCart;