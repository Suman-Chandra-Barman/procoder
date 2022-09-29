import React from "react";
import Question from "../Question/Question";

const Questions = () => {
  const question1 = "1. How does react work?";
  const ans1 =
    "React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation";
  const question2 = "2. What are the differences between props and state ?";
  const ans2 =
    "Props are used to pass data from one component to another.The state is a local data storage that is local to the component only and cannot be passed to other components.The this.setState property is used to update the state values in the component.";
  const question3 = "3. What is useEffect used for other than loading data?";
  const ans3 = ` 1. Validating input field 2. live filtering 3. trigger animation on new array value 4. update paragraph list on fetched API data update 5. updating fetched API data to get BTC updated price 6. setting up a subscription 7. manually changing the DOM in React 8. setInterval and other outside work`;

  return (
    <div className="my-10 md:w-[90%] mx-auto">
      <Question question={question1} ans={ans1}></Question>
      <Question question={question2} ans={ans2}></Question>
      <Question question={question3} ans={ans3}></Question>
    </div>
  );
};

export default Questions;
