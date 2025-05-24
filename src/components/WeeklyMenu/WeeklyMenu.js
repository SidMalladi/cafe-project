import React from 'react';
import './WeeklyMenu.css';

const weeklyMenuData = [
  { day: 'Monday', items: ['Khichdi', 'Mixed Veg Sabzi', 'Chapati'] },
  { day: 'Tuesday', items: ['Gujarati Thali', 'Fafda', 'Shrikhand'] },
  { day: 'Wednesday', items: ['Chana Masala', 'Jeera Rice', 'Roti'] },
  { day: 'Thursday', items: ['Aloo Paratha', 'Curd', 'Pickle'] },
  { day: 'Friday', items: ['Upma', 'Coconut Chutney', 'Vada'] },
];

function WeeklyMenu() {
  return (
    <div className="weekly-menu">
      <h2>Weekly Menu</h2>
      <div className="menu-grid">
        {weeklyMenuData.map((dayMenu, idx) => (
          <div key={idx} className="menu-card">
            <h3>{dayMenu.day}</h3>
            <ul>
              {dayMenu.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyMenu;