import React from 'react';
import './Navbar.css';
import logo from '../../assets/om.jpg';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#home" className="logo">
          <img src={logo} alt="Yugal Kunj Logo" />
          <span>Yugal Kunj Cafeteria</span>
        </a>
        <nav>
          <ul className="navList">
            <li><a href="#home">Home</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="#weekly-menu">Menu</a></li>
            <li><a href="#snacks-sweets">Snacks & Sweets</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;