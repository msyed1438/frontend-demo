import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QABlock from "./components/QA_Block";

const App = () => {
  const [faqs, setFAQs] = useState([]);

  useEffect(() => {
    setFAQs(initialState)
  }, [])
  

  const initialState = [
    {
      question: "What is your return policy?",
      answer:
        "We offer free shipping and free returns for up to 90 days on products that are still in new condition. Any products that aren't resellable in the condition they were returned will incur a 15% restocking fee.",
      isCollapsed: true,
    },
    {
      question: "When will I receive my order?",
      answer: "You're never getting your order",
      isCollapsed: true,
    },
    {
      question: "Can I make changes to an order I already placed?",
      answer: "To be honest not really, thats too much work for us",
      isCollapsed: true,
    },
    {
      question: "What do I do if I never received my order?",
      answer: "Well damn, tough luck, can't really help you much there",
      isCollapsed: true,
    },
  ];

  const toggleQAs = (indexClicked) => {
    //Create a deep copy of current FAQ state
    const qas_copy = faqs.map((a) => {
      return { ...a };
    });

    //Helper function to toggle a single FAQ
    const toggledQA = (qaBlock) => {
      qaBlock[isCollapsed] = !qaBlock[isCollapsed];
      return qaBlock;
    };

    //Create a new array where, at the clicked index, we toggle the isCollapsed state
    toggledQAs = qas_copy.map((QA, i) => {
      if (i === indexClicked) {
        alert('Index: ', i, ' was triggered')
        return toggledQA(QA);
      } else {
        return QA;
      }
    });
    console.log('Toggled QAs: ', toggleQAs)
    alert(JSON.stringify(toggledQAs))

    setFAQs(toggledQAs)
  };

   

  return (
    <div className="h-screen bg-cool-gray shadow-inner grid place-items-center">
      <div className="max-w-sm flex flex-col bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-4 text-slate-900">
          Frequently Asked Questions
        </h1>
        <div className="mb-5 faqs">


          {faqs.map((faq, i) => (
            <QABlock
              isCollapsed={faq["isCollapsed"]}
              toggleIsOpen={toggleQAs}
              question={faq["question"]}
              answer={faq["answer"]}
              qa_index={i}
              faqs= {faqs}
            />
          ))}

          {/* <div className="qa-block bg-metal-400 text-metal-600 p-5 rounded-xl mb-2">
            <h4 className="inline-block font-medium tracking-wide">
              When will I receive my order?
            </h4>
            <p>
                Never
            </p>
          </div> */}
        </div>

        <button className="bg-light-green text-white rounded-full py-4 font-bold tracking-wide">
          Submit Your Question
        </button>
      </div>
    </div>
  );
};

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
