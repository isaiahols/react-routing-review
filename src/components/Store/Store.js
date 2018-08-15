import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { addToCart } from '../../ducks/reducer';

class Store extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get('https://practiceapi.devmountain.com/products')
            .then(response => {
                // console.log( response )
                this.setState({ products: response.data })
            })
    }

    render() {
        const { addToCart } = this.props;


        let products = this.state.products.map((item, i) => {
            return (
                <div key={i}>
                    <Link to={`/product/${item.id}`}>
                        <img className='product-img' src={item.image} />
                    </Link>
                    <div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <button
                            onClick={() => addToCart(item)}
                        >Add to Cart</button>
                        <hr />
                    </div>
                </div>
            )
        })

        return (
            <div style={{ width: '100%', minHeight: '100vh', background: '#ed8f64' }}>
                <h2>${this.props.totalCost}</h2>
                <h1>THIS IS THE STORE</h1>
                {products}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { totalCost } = state;
    return {
        totalCost
    }
}


export default connect(mapStateToProps, { addToCart })(Store);