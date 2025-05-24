import React from 'react';
import './DayMenus.css';

const dayMenusData = [
  {
    title: "Tuesday — Gujarati Thali",
    items: ["Undhiyu", "Bhakri", "Green Chutney", "Shrikhand"],
    img: require("../../assets/om.jpg"),
  },
  {
    title: "Wednesday — Mother's Day Special Thali",
    items: ["Mattar Paneer", "Tandoori Roti", "Raita", "Gulab Jamun"],
    img: require("../../assets/om.jpg"),
  },
  {
    title: "Thursday — North Indian Thali",
    items: ["Chole Bhature", "Mixed Veg Sabzi", "Kheer"],
    img: require("../../assets/om.jpg"),
  },
  {
    title: "Friday — South Indian Thali",
    items: ["Masala Dosa", "Sambar", "Coconut Chutney"],
    img: require("../../assets/om.jpg"),
  },
];

function DayMenus() {
  return (
    <div className="day-menus">
      {dayMenusData.map((menu, idx) => (
        <div key={idx} className="day-menu-card">
          <img src={menu.img} alt={menu.title} />
          <div className="day-menu-content">
            <h3>{menu.title}</h3>
            <ul>
              {menu.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DayMenus;
