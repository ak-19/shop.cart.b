import React from 'react';
import Footer from '../partialcomponents/footer';
import Navbar from '../partialcomponents/navbar';

class Layout extends React.Component {
  render () {
    return  (
      <div>
        <Navbar/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Layout;
