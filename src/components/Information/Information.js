import React from "react";
import { useEffect, useState } from "react";
import Break from "../Break/Break";
import BreakTime from "../BreakTime/BreakTime";
import CoderInfo from "../CoderInfo/CoderInfo";
import WorkTime from "../WorkTime/WorkTime";
import swal from "sweetalert";
const Information = ({ workingTime }) => {
  const [timeBreak, setTimeBreak] = useState(0);
  useEffect(() => {
    const bdBreakTime = localStorage.getItem("time");
    setTimeBreak(bdBreakTime);
  }, []);
  return (
    <div>
      <CoderInfo></CoderInfo>
      <Break setTimeBreak={setTimeBreak}></Break>
      <WorkTime workingTime={workingTime}></WorkTime>
      <BreakTime timeBreak={timeBreak}></BreakTime>
      <div className="mt-10">
        <button
          onClick={() =>
            swal("Good job!", "Your Activity Completed!", "success")
          }
          className="btn btn-primary w-full"
        >
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Information;
