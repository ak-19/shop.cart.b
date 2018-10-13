import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProduct} from '../state/actions/product';

class DeleteProduct extends Component {
  state = {
    selectedProduct: undefined
  }

  setUpInitialbinding(){
    if (!this.props.productsProvider.products) {
      return undefined;
    }

    if (this.props.productsProvider.products.length < 1) {
      return undefined;
    }

    return this.props.productsProvider.products[0]._id
  }

  renderSelectItems(){
    return [<option key="nooption" value="nooption" disabled hidden>Choose here</option>,
    ...this.props.productsProvider.products.map(product => {
        return (<option value={product._id} key={product._id}>{product.name}</option>)
    })];
  }

  changeSelection(e){
    console.log();
    this.setState({selectedProduct: e.target.value});
  }

  deleteSelected(){
    this.props.deleteProduct(this.state.selectedProduct);
  }

  render () {
   return (
     <div  className="card card-body bg-light">
       <h4>
         Delete product
       </h4>
       <div className="form-group">
         <label htmlFor="productDeleteSelection">
          Select product to delete
         </label>
         <select defaultValue="nooption" onChange={e => this.changeSelection(e)} className="form-control" id="productDeleteSelection">
           {this.renderSelectItems()}
         </select>
       </div>
       <button className="btn btn-primary col-3" onClick={ e => this.deleteSelected()}>Delete selected product</button>
     </div>
   )
  }
}

const mapStateToProps = (state) => ({
  productsProvider: state.productsReducer
})

export default connect(mapStateToProps, {deleteProduct})(DeleteProduct);
