"use client"
import { useState } from 'react';

const Faqs = () => {
  const [faqs, setFaqs] = useState([
    { question: 'What is Next.js?', answer: 'Next.js is a React framework for building server-side rendered and statically generated web applications.' },
    { question: 'How do I toggle FAQ items?', answer: 'You can toggle FAQ items by clicking on the question.' },
    // Add more FAQ items as needed
  ]);

  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <div onClick={toggle} style={{ cursor: 'pointer' }}>
          <h3 className='text-white text-2xl py-2 px-6'>{question}</h3>
        </div>
        {isOpen && <p className='text-[#c0bebe] text-xl py-2 px-8'>{answer}</p>}
      </div>
    );
  };

  return (
    <div className='bg-[#191919]'>
    <div className='w-full  mdl:w-[70%] m-auto p-7 py-12 '>
      <h1 className='text-white text-center text-[40px]'>FAQs</h1>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    </div>
  );
};

export default Faqs;
