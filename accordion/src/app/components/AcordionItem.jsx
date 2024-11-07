// src/components/AccordionItem.jsx
import React from "react";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 rounded-lg flex justify-between items-center bg-gray-100 hover:bg-gray-200"
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-lg">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-300 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
