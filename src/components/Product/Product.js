import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';

class Product extends Component {
    state = {
        product: {}
    }

    componentDidMount() {
        const { alligator } = this.props.match.params
        axios.get(`https://practiceapi.devmountain.com/products/${alligator}`)
            .then(response => {
                console.log(response.data)
                this.setState({ product: response.data })
            })
    }

    handleReverse() {
        this.props.history.goBack();
    }

    render() {
        const { image } = this.state.product
        const { addToCart } = this.props;
        const { product } = this.state;

        console.log(this.props)

        return (
            <div style={{ height: '100vh', width: '100%', background: '#64ed6b' }}>
                <button onClick={() => this.handleReverse()}>Back</button>
                <img src={image} />
                <button onClick={() => addToCart(product)} >Add to Cart</button>
            </div>
        )
    }
}

export default connect(null, { addToCart })(Product);