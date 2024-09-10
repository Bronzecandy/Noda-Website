import React from 'react';
import './Footer.css'; // Import file CSS nếu bạn muốn sử dụng CSS riêng cho Footer
import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
       <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>
      <div className="footer-links-and-circles">
        <ul className="footer-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/Marketplace">Marketplace</a></li>
        </ul>
        <div className="footer-circles">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
