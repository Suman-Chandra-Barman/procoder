import React from "react";
import Question from "../Question/Question";

const Questions = () => {
  const question1 = "1. How does react work?";
  const ans1 =
    "React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.";
  const question2 = "2. What are the differences between props and state ?";
  const ans2 =
    "Props are used to pass data from one component to another.The state is a local data storage that is local to the component only and cannot be passed to other components.The this.setState property is used to update the state values in the component.";
  const question3 = "3. What is useEfacet used for other than loading data?";
  const ans3 = `(1) setting up a subscription (2) manually changing the DOM in React (3) setInterval work`;

  return (
    <div className="my-10 md:w-[90%] mx-auto">
      <Question question={question1} ans={ans1}></Question>
      <Question question={question2} ans={ans2}></Question>
      <Question question={question3} ans={ans3}></Question>
    </div>
  );
};

export default Questions;
