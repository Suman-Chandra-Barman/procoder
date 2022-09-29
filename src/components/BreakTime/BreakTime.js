import React from "react";

const BreakTime = ({ timeBreak }) => {
  return (
    <div>
      <div className="flex justify-between bg-slate-200 py-2 px-4 rounded-md mt-3">
        <h4>Break time</h4>
        <p> {timeBreak}min</p>
      </div>
    </div>
  );
};

export default BreakTime;
