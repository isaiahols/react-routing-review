import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Store extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get( 'https://practiceapi.devmountain.com/products' )
            .then( response => {
                // console.log( response )
                this.setState({ products: response.data })
            } )
    }

    render() {

        let products = this.state.products.map( (item, i) => {
            return (
                <div key={i}>
                    <Link to={`/product/${item.id}`}>
                        <img className='product-img' src={item.image} />
                    </Link>
                    <div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <hr/>
                    </div>
                </div>
            )
        } )

        return (
            <div style={{width: '100%', minHeight: '100vh', background: '#ed8f64'}}>
                <h1>THIS IS THE STORE</h1>
                {products}
            </div>
        )
    }
}

export default Store;