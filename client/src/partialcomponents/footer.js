import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <p>Shop Cart A © {new Date().getFullYear()} Copyright</p>
    </div>
  )
}

export default Footer;
