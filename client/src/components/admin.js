import React, {Component} from 'react';

import AddProduct from './addproduct';
import DeleteProduct from './deleteproduct';

class Admin extends Component {
  render () {
    return (
      <div>
        <AddProduct/>
        <DeleteProduct/>
      </div>
    );
  }
}

export default Admin;
