import React, { useState } from "react";

const QA_Block = ({ isCollapsed, toggleIsOpen, question, answer, qaIndex, faqs }) => {

  return (
    <div className="qa-block bg-metal-400 text-metal-600 p-4 mb-2 rounded-xl">
      <h4 className="inline-block font-medium tracking-wide" onClick={
        () => {
            // toggleIsOpen((isOpen) => !isOpen)
            toggleIsOpen(qaIndex)
        }
      }>
        {question}
      </h4>
      {!isCollapsed ? (<p className="font-light leading-snug mt-2 text-sm">
        {answer}
      </p>): null }
    </div>
  );
};

export default QA_Block;
