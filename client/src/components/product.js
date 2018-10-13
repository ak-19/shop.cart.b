import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from '../state/actions/cart';

class Product extends Component {
  addItemToCart(e){
    const {_id: productId, name, price} = this.props;
    this.props.addItemToCart({productId, name, price});
  }
  render () {
    const {name, price, description} = this.props;
    return (
        <div className="card mb-4 shadow-sm">
            <h4 className="card-header">{name}</h4>
            <div className="card-body">
              <p className="product-description">{description}</p>
              <h6>${price}</h6>
              <button type="button"
                      className="btn btn-lg btn-block btn-primary"
                      onClick={e => this.addItemToCart(e)}
                      >Buy</button>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartHandler: state.cartReducer
});

export default connect(mapStateToProps, {addItemToCart})(Product);
