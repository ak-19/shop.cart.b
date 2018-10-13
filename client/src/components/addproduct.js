import React from 'react';
import {connect} from 'react-redux';
import {addNewProduct} from '../state/actions/product';
import {removeClearFlag} from '../state/actions/product';

import {clearError} from  '../state/actions/error';
import validateProduct from '../validation/product';
import  './addproduct.css';

class AddProduct extends React.Component {
  state = {
    name: '',
    description: '',
    vendor: '',
    releaseYear: '',
    price: 0,
    error: undefined
  }

  componentWillReceiveProps(props){
    const {error} = props.errorProvider;
    const {clearForm} = props.productProvider;
    if (clearForm) {
      this.props.removeClearFlag();
      this.setState({
        name: '',
        description: '',
        vendor: '',
        releaseYear: '',
        price: 0,
        error: undefined
      });
      return;
    }
    if(error){
      this.setState({error});
    }
  }

  changeProp(e){
    const {state} = this;
    state[e.target.name] = e.target.value;
    state.error = undefined;
    this.props.clearError();
    this.setState(state);
  }

  submitProduct(e){
    e.preventDefault(e);
    const {name, vendor, price, releaseYear, description} = this.state;
    const {isValid, error} = validateProduct({name, vendor, price});
    if (isValid) {
      this.props.addNewProduct({name, vendor, price, releaseYear, description});
    }else{
      this.setState({error});
    }
  }

  renderErrorMessage(error, name){
    return (error && error[name] ?
       <small className="form-error-validation-message">
         {error[name]}.
       </small>
       :
       null)
  }

  render () {
    const {error} = this.state;
    const {processing} = this.props.productProvider;

    if (processing) {
      return (
        <div>...Processsing</div>
      );
    }
    return (
      <div className="card card-body bg-light">
        <h4>
          Add new product
        </h4>
        <form onSubmit={e => this.submitProduct(e)}>
          <div className="form-group">
            <label htmlFor="name">Product name</label>
            <input type="text" className='form-control'
                   id="name"
                   name="name"
                   aria-describedby="nameHelp"
                   placeholder="Enter product name"
                   value={this.state.name}
                   onChange={e => this.changeProp(e)}/>
                 {this.renderErrorMessage(error, 'name')}
                 <small id="nameHelp" className="form-text text-muted">
                   This will appear to user as product item name.
                 </small>
          </div>
          <div className="form-group">
            <label htmlFor="description">Product description</label>
            <input type="text" className="form-control" id="description"  name="description"
                  value={this.state.description}
                  onChange={e => this.changeProp(e)}
                  placeholder="Enter description"/>
          </div>
          <div className="form-group">
            <label htmlFor="vendor">Product vendor</label>
            <input type="text" className="form-control" id="vendor" name="vendor"
                    value={this.state.vendor}
                    onChange={e => this.changeProp(e)}
                   placeholder="Enter vendor"/>
                   {this.renderErrorMessage(error, 'vendor')}
          </div>
          <div className="form-group">
            <label htmlFor="releaseYear">Product release year</label>
            <input type="number" className="form-control" id="releaseYear" name="releaseYear"
                    value={this.state.releaseYear}
                    onChange={e => this.changeProp(e)}
                   placeholder="Enter release year"/>
          </div>
          <div className="form-group">
            <label htmlFor="price">Product price</label>
            <input type="number" step="any" className="form-control" id="price" name="price"
                  value={this.state.price}
                  onChange={e => this.changeProp(e)}
                  placeholder="Enter price"/>
            {this.renderErrorMessage(error, 'price')}
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productProvider: state.addProductReducer,
  errorProvider: state.errorReducer
})

export default connect(mapStateToProps, {addNewProduct, clearError, removeClearFlag})(AddProduct);
