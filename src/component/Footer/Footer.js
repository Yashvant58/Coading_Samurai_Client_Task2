import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import img from './yash.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={img} alt="Logo"/>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="tel:+917905938368">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <Link to="https://www.facebook.com/profile.php?id=100083456011662" className="social-icon">Facebook</Link>
          <Link to="#" className="social-icon">Twitter</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
