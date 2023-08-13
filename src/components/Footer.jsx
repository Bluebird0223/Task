import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <hr />
      <div className="footer-content">
        <div className="footer-left">
          <img src="logo.png" alt="Company Logo" className="logo" />
        </div>
        <div className="footer-right">
          <div className="address">
            <p>Your Company Name</p>
            <p>123 Street, City</p>
            <p>Country</p>
          </div>
          <div className="social-links">
            <a href="/"><i className="fa fa-facebook"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <p className='copy'>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;