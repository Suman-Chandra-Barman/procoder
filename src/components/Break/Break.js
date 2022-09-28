import React from "react";

const Break = ({ setTimeBreak }) => {
  const countBreakTime = (time) => {
    localStorage.setItem("time", time);
    setTimeBreak(time);
  };
  return (
    <div>
      <div className="btn-group text-center gap-1 mt-10">
        <button onClick={() => countBreakTime(30)} className="btn">
          30
        </button>
        <button onClick={() => countBreakTime(35)} className="btn">
          35
        </button>
        <button onClick={() => countBreakTime(45)} className="btn">
          45
        </button>
        <button onClick={() => countBreakTime(55)} className="btn">
          55
        </button>
      </div>
    </div>
  );
};

export default Break;
