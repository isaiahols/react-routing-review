import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
        let mappedCart = this.props.cart.map(product => {
            return (
                <div key={product.id} >
                    <img
                        src={product.image}
                        className="product-img"
                    />
                </div>
            )
        })

        return (
            <div style={{ minHeight: '100vh', width: '100%', background: '#a464ed' }}>
                <h1>${this.props.totalCost}</h1>
                {mappedCart}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cart, totalCost } = state;

    return {
        cart, totalCost
    }
}

export default connect(mapStateToProps, {})(Cart);
