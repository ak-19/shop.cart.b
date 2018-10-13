import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-bootstrap4-modal';
import CartItem from './cartitem';
import {submitCart} from '../state/actions/cart';
import {formatCurency} from '../util/format';
import './cart.css';

class Cart extends React.Component {
  state = {
    showCheckout: false
  }

  openCheckoutConfirmationDialog(show){
    this.setState({showCheckout: show});
  }

  get haveItemsInCart(){
    return this.props.cartProvider.items.length > 0;
  }

  renderCheckoutFeature(){
      return (
        <tr>
          <td>
            { this.haveItemsInCart ? <button  className="btn btn-primary" onClick={e => this.openCheckoutConfirmationDialog(true)}>Checkout</button> : null}
          </td>
          <td>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
  }

  renderCartItems(){
    return this.props.cartProvider.items.map(item => {
      return (
        <CartItem  key={item.productId} {...item}/>
      )
    });
  }

  checkout(){
    this.openCheckoutConfirmationDialog(false);
    const {items, total} = this.props.cartProvider;
    this.props.submitCart({items, total});
  }

  render () {
    return (
      <div>
        <Modal visible={this.state.showCheckout} onClickBackdrop={e => this.openCheckoutConfirmationDialog(false)}>
          <div className="modal-header">
            <h5 className="modal-title">Checkout confirmation</h5>
          </div>
          <div className="modal-body">
            <p>Press button to confirm!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={e => this.openCheckoutConfirmationDialog(false)}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={e => this.checkout()}>
              Confirm
            </button>
          </div>
        </Modal>

        <table className="table table-dark customized-cart">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderCartItems()}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>€{formatCurency(this.props.cartProvider.total)}</td>
              <td></td>
            </tr>
            {this.renderCheckoutFeature()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartProvider: state.cartReducer
})

export default connect(mapStateToProps, {submitCart})(Cart);
