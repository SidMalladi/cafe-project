import React, { useState } from 'react';
import './ContactGrid.css';

function ContactGrid() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder for newsletter signup logic
    setSubmitted(true);
  };

  return (
    <div className="contact-grid">
      <h2>Get in Touch</h2>
      <div className="grid">
        <div className="card">
          <h3>Call Us</h3>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>
        <div className="card">
          <h3>Email Us</h3>
          <a href="mailto:info@radhakrishnatemple.net">info@radhakrishnatemple.net</a>
        </div>
        <div className="card newsletter">
          <h3>Newsletter</h3>
          {submitted ? (
            <p>Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactGrid;