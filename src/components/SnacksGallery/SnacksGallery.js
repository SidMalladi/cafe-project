import React from 'react';
import './SnacksGallery.css';

const snacksData = [
  { title: "Samosa", img: require("../../assets/om.jpg") },
  { title: "Jalebi", img: require("../../assets/om.jpg") },
  { title: "Kachori", img: require("../../assets/om.jpg") },
  { title: "Rasgulla", img: require("../../assets/om.jpg") },
];

function SnacksGallery() {
  return (
    <div className="snacks-gallery">
      <h2>Snacks & Sweets</h2>
      <div className="gallery-grid">
        {snacksData.map((item, idx) => (
          <div key={idx} className="gallery-item">
            <img src={item.img} alt={item.title} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SnacksGallery;
