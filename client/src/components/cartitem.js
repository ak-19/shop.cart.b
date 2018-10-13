import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatCurency} from '../util/format';
import {deleteItemFromCart, increaseItemQuantity, decreaseItemQuantity} from '../state/actions/cart';

class CartItem extends Component {
  increaseQuantity(){
    this.props.increaseItemQuantity(this.props.productId);
  }

  decreaseQuantity(){
    this.props.decreaseItemQuantity(this.props.productId);
  }

  deleteItem(id){
    this.props.deleteItemFromCart(this.props.productId);
  }

  render () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.count} <i className="fas fa-plus" onClick={e => this.increaseQuantity()}></i> <i className="fas fa-minus" onClick={e => this.decreaseQuantity()}></i></td>
        <td>€{formatCurency(this.props.price)}</td>
        <td>€{formatCurency(this.props.total)}</td>
        <td><div className='fa fa-window-close' onClick={e => this.deleteItem()}/></td>
      </tr>
    )
  }
}

export default connect(null, {deleteItemFromCart, increaseItemQuantity, decreaseItemQuantity})(CartItem);
