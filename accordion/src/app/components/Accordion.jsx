// src/components/Accordion.jsx
import React, { useState } from "react";
import AccordionItem from "./AcordionItem";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is roadmap.sh?",
      answer:
        "roadmap.sh is a community effort to create learning paths, guides, project ideas, and other similar content to help developers grow in their careers.",
    },
    {
      question: "What are the plans for roadmap.sh?",
      answer:
        "Plans for roadmap.sh include expanding content and collaborating with more contributors.",
    },
    {
      question: "How is roadmap.sh built?",
      answer:
        "roadmap.sh is built using modern web technologies with a focus on scalability and community contribution.",
    },
  ];

  // Function to handle toggling the open item
  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

