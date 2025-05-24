import React from 'react';
import './Specials.css';

const specialsData = [
  { title: 'Weekend Special Thali', img: require('../../assets/om.jpg'), description: 'A wholesome sattvic thali with seasonal vegetables, dal, rice, and roti.' },
  { title: 'Gajar ka Halwa', img: require('../../assets/om.jpg'), description: 'Classic Indian sweet made with fresh carrots and milk.' },
  { title: 'Paneer Butter Masala', img: require('../../assets/om.jpg'), description: 'Rich and creamy paneer curry served with naan.' }
];

function Specials() {
  return (
    <div className="specials">
      <h2>Weekend Specials</h2>
      <div className="specials-grid">
        {specialsData.map((item, index) => (
          <div key={index} className="special-card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specials;