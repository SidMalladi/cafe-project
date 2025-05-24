import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import WeeklyMenu from './components/WeeklyMenu/WeeklyMenu';
import DayMenus from './components/DayMenus/DayMenus';
import SnacksGallery from './components/SnacksGallery/SnacksGallery';
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import ContactGrid from './components/ContactGrid/ContactGrid';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="specials">
        <Specials />
      </section>

      <section id="weekly-menu">
        <WeeklyMenu />
      </section>

      <section id="day-menus">
        <DayMenus />
      </section>

      <section id="snacks-sweets">
        <SnacksGallery />
      </section>

      <section id="faqs">
        <FAQAccordion />
      </section>

      <section id="contact">
        <ContactGrid />
      </section>

      <Footer />
    </>
  );
}

export default App;