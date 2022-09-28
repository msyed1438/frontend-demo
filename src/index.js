import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QABlock from "./components/QA_Block";

const App = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer free shipping and free returns for up to 90 days on products that are still in new condition. Any products that aren't resellable in the condition they were returned will incur a 15% restocking fee.",
    },
    {
      question: "When will I receive my order?",
      answer: "You're never getting your order",
    },
    {
      question: "Can I make changes to an order I already placed?",
      answer: "To be honest not really, thats too much work for us",
    },
    {
      question: "What do I do if I never received my order?",
      answer: "Well damn, tough luck, can't really help you much there",
    },
  ];
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const toggleQAs = (indexClicked) => {
    setSelectedIndex(curr => curr === indexClicked ? -1 : indexClicked);
  };

  return (
    <div className="h-screen bg-cool-gray shadow-inner grid place-items-center antialiased">
      <div className="max-w-sm flex flex-col bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-4 text-slate-900 leading-9 subpixel-antialiased">
          Frequently Asked Questions
        </h1>
        <div className="mb-6 faqs flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <QABlock
              isCollapsed={i !== selectedIndex}
              toggleIsOpen={toggleQAs}
              question={faq["question"]}
              answer={faq["answer"]}
              qaIndex={i}
              faqs={faqs}
              key={i}
            />
          ))}
        </div>

        <button className="bg-light-green text-white rounded-full py-4 font-bold tracking-wide leading-5 h-14">
          Submit Your Question
        </button>
      </div>
    </div>
  );
};

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
