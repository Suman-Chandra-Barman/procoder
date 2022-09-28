import React from "react";

const WorkTime = ({ workingTime, name }) => {
  return (
    <div className="flex justify-between bg-slate-200 py-2 px-4 rounded-md mt-10">
      <h4>{name}</h4>
      <p> {workingTime}min</p>
    </div>
  );
};

export default WorkTime;
