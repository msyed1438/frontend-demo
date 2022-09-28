import React, { useState } from "react";
import ChevronUp from "../../assets/ChevronUp";
import ChevronDown from "../../assets/ChevronDown";
import clsx from "clsx";

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
        className="flex justify-between items-center gap-x-[10px] hover:cursor-pointer"
        onClick={() => {
          toggleIsOpen(qaIndex);
        }}
      >
        <h4 className="inline-block font-medium"  >
          {question}
        </h4>
        <div className="px-2">
         <ChevronDown className={clsx("transform transition duration-300", {
          '-rotate-180': !!isCollapsed
         })} />
        </div>
      </div>
      {!isCollapsed ? (
        <p className="leading-snug text-sm">{answer}</p>
      ) : null}
    </div>
  );
};

export default QA_Block;
