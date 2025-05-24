import React, { useState } from 'react';
import './FAQAccordion.css';

const faqData = [
  { question: 'Can I customize my order?', answer: 'Yes, please call us at the number below or leave a note in the booking form.' },
  { question: 'Do you offer takeaway?', answer: 'Yes, all our meals are packaged for easy takeaway.' },
  { question: 'Is advance booking required?', answer: 'Advance booking is recommended but not mandatory.' },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="faq-accordion">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, idx) => (
        <div key={idx} className="faq-item">
          <button className="faq-question" onClick={() => toggleIndex(idx)}>
            {item.question}
            <span className={`arrow ${openIndex === idx ? 'open' : ''}`}>▶</span>
          </button>
          {openIndex === idx && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;