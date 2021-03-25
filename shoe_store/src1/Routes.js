import React from 'react';
import {  BrowserRouter as Router,Switch,Route,Link  } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import ProductItem from './components/ProductItem'
import Product from './components/Product'
import Navbar from './components/Navbar'

function Routes() {
    return(
        <div>
            <Router >
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Product" component={Product} />
                    <Route path="/product/:id" component={ProductItem}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
                </Switch>
            </Router>

        </div>
    )
}

export default Routes;