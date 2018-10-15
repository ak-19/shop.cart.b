import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from './hoc/layout';
import StoreWrapper from './hoc/storewrapper';

import ProductList from './components/productlist';
import Cart from './components/cart';
import Admin from './components/admin';


import './application.css';

class Application extends Component {
  render() {
    return (
      <StoreWrapper>
          <Router>
              <Switch>
                <Layout>
                  <Route path="/" exact component={ProductList}/>
                  <Route path="/admin" exact component={Admin}/>
                  <Route path="/cart" exact component={Cart}/>
                </Layout>
              </Switch>
          </Router>
      </StoreWrapper>
    );
  }
}

export default Application;
