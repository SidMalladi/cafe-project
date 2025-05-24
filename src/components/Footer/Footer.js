import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#specials">Specials</a>
          <a href="#weekly-menu">Menu</a>
          <a href="#snacks-sweets">Snacks & Sweets</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Yugal Kunj Cafeteria. All rights reserved.</p>
        <div className="social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;