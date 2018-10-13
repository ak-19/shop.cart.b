import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../state/actions/product';
import Product from './product';

import './productlist.css';

class ProductList extends Component {
  componentDidMount(){
    this.props.getProducts();
  }
  renderProducts(){
    return this.props.productProvider.products.map(p => <Product key={p._id} className="col" {...p}/>);
  }
  render () {
    if(this.props.productProvider.loading){
      return (
        <div>
          ...loading data
        </div>
      );
    }

    return (
      <div className="container">
        <div className="pricing-header-background pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Shop cart A</h1>
          <p className="lead">
            Click buy and add product to the cart
          </p>
        </div>
        <div className="card-deck mb-3 text-center">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productProvider: state.productsReducer
});

export default connect(mapStateToProps, {getProducts})(ProductList);
