import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div style={{width: '100%', minHeight: '100vh', background: 'cornflowerblue'}}>
            <h1>This is the home page!!</h1>
            <Link to='/store'><button>Store</button></Link>
        </div>
    )
}