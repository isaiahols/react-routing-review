import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
    state = {
        product: {}
    }

    componentDidMount() {
        const { alligator } = this.props.match.params
        axios.get( `https://practiceapi.devmountain.com/products/${alligator}` )
            .then( response => {
                console.log( response.data )
                this.setState({ product: response.data })
            })
    }

    handleReverse() {
        this.props.history.goBack();
    }

    render() {
        const { image } = this.state.product

        console.log( this.props )

        return (
            <div style={{height: '100vh', width: '100%', background: '#64ed6b'}}>
                <button onClick={() => this.handleReverse()}>Back</button>
                <img src={image} />
            </div>
        )
    }
}

export default Product;