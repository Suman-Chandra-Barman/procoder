import React from "react";

const Question = ({ question, ans }) => {
  return (
    <div className="my-5">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">{question}</div>
        <div className="collapse-content">
          <p>{ans}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
