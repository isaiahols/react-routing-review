import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Product from './components/Product/Product';

export default (
    <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/store' component={Store} />
        <Route path='/product/:alligator' component={Product} />

    </Switch>
)