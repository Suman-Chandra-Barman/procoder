import React from "react";

const WorkTime = ({ workingTime }) => {
  return (
    <div className="mt-10">
      <h4 className="font-semibold mb-5">Practice Details</h4>
      <div className="flex justify-between bg-slate-200 py-2 px-4 rounded-md">
        <h4>Practice time</h4>
        <p> {workingTime}min</p>
      </div>
    </div>
  );
};

export default WorkTime;
