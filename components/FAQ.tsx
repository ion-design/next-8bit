
// FAQ dropdown card with 10 questions. When you click each question it should expand with an answer.


import React, { useState } from 'react';

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, particularly single-page applications."
  },
  {
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
  },
  {
    question: "How do I install React?",
    answer: "You can create a new React project using Create React App by running 'npx create-react-app my-app' in your terminal."
  },
  {
    question: "How do I install Tailwind CSS?",
    answer: "You can install Tailwind CSS via npm by running 'npm install tailwindcss' and then initializing it with 'npx tailwindcss init'."
  },
  {
    question: "What are React hooks?",
    answer: "React hooks are functions that let you use state and other React features without writing a class."
  },
  {
    question: "What is the virtual DOM in React?",
    answer: "The virtual DOM is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM."
  },
  {
    question: "What are the advantages of using Tailwind CSS?",
    answer: "Tailwind CSS offers rapid UI development, consistency in design, and easy customization without leaving your HTML."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript often used with React to describe what the UI should look like."
  },
  {
    question: "How does Tailwind differ from Bootstrap?",
    answer: "While Bootstrap provides pre-built components, Tailwind offers utility classes to build custom designs without writing CSS."
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    answer: "The useEffect hook in React is used for side effects in function components, similar to componentDidMount and componentDidUpdate in class components."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nes-container is-dark mb-4">
      <button
        className="w-full text-left font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="float-right">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 px-4 py-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQDropdown = () => {
  return (
    <div className="nes-container with-title is-dark max-w-2xl mx-auto mt-10">
      <p className="title">Frequently Asked Questions</p>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQDropdown;
