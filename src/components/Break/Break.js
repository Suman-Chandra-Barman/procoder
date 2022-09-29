import React from "react";

const Break = ({ setTimeBreak }) => {
  const countBreakTime = (time) => {
    localStorage.setItem("time", time);
    setTimeBreak(time);
  };
  return (
    <div className=" mt-10">
      <h4 className="font-semibold mb-5">Add A Break</h4>
      <div className="btn-group text-center">
        <button onClick={() => countBreakTime(30)} className="btn btn-primary">
          30
        </button>
        <button onClick={() => countBreakTime(35)} className="btn btn-primary">
          35
        </button>
        <button onClick={() => countBreakTime(45)} className="btn btn-primary">
          45
        </button>
        <button onClick={() => countBreakTime(55)} className="btn btn-primary">
          55
        </button>
      </div>
    </div>
  );
};

export default Break;
