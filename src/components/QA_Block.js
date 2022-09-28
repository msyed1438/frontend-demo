import React, { useState } from "react";
import ChevronUp from "../../assets/ChevronUp";
import ChevronDown from "../../assets/ChevronDown";

const QA_Block = ({
  isCollapsed,
  toggleIsOpen,
  question,
  answer,
  qaIndex,
  faqs,
}) => {
  return (
    <div className="bg-metal-400 text-metal-600 p-4 rounded-xl flex flex-col gap-4">
      <div
        className="flex justify-between items-center gap-7"
        onClick={() => {
          // toggleIsOpen((isOpen) => !isOpen)
          //   alert("Clicked!");
          toggleIsOpen(qaIndex);
        }}
      >
        <h4 className="inline-block font-medium text-lg"  >
          {question}
        </h4>
        {isCollapsed ? <ChevronDown /> : <ChevronUp />}
      </div>
      {!isCollapsed ? (
        <p className="font-light leading-snug text-base">{answer}</p>
      ) : null}
    </div>
  );
};

export default QA_Block;
