import React, { useState } from 'react';

const faqData = [
  {
    question: "Do I need to have a technical background?",
    answer: "No, we provide training from scratch and full technical support throughout the process.",
  },
  {
    question: "How much does it cost?",
    answer: "Costs vary depending on project size and mission type — contact us for detailed pricing.",
  },
  {
    question: "Do you support graduation projects?",
    answer: "Absolutely! We work with graduation teams and help with prototyping and testing.",
  },
  {
    question: "Can we join only the training?",
    answer: "Yes! We offer standalone training programs for individuals and teams interested in CubeSat development.",
  },
  {
    question: "Where does the launch take place?",
    answer: "We partner with international launch providers and support you through integration and launch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{item.question}</div>
              {openIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
