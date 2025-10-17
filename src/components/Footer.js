import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p>Reach Out Below!</p>
        <ul className="footer-links">
          <li><a href="/email">Email</a></li>
          <li><a href="/phone">Phone</a></li>
          <li><a href="/address">Address</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <p>Navigate</p>
        <ul className="footer-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/browse">Browse</a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <small>©2025 Readian</small>
      </div>
    </footer>
  );
};

export default Footer;

