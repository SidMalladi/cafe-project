import React from 'react';
import './Hero.css';
import heroImg from '../../assets/Hi.jpg';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="overlay" />
      <img src={heroImg} alt="Assorted vegetarian dishes" className="bgImage" />
      <div className="content">
        <h1>Yugal Kunj Cafeteria</h1>
        <p className="tagline">Nourish Your Soul with Pure, Sattvic Bliss!</p>
        <p className="hours">Tuesday – Saturday • 11:30 AM – 1:30 PM</p>
        <a href="#weekly-menu" className="cta">View Menu</a>
      </div>
    </section>
  );
}

export default Hero;