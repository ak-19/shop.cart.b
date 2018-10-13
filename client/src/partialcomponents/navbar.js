import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {
  getTotalQuantity(){
    return this.props.cartProvider.items.reduce( (prev,curr) => prev + curr.count, 0);
  }
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/cart">Your cart<span className="badge badge-secondary">{this.getTotalQuantity()}</span></Link>
              </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  cartProvider: state.cartReducer
})

export default connect(mapStateToProps, {})(Navbar);
