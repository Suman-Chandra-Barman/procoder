import React from "react";

const Project = (props) => {
  const { workingTime, setWorkingTime } = props;
  const calculateWorkingTime = (time) => {
    setWorkingTime(workingTime + time);
  };
  const { name, time, picture } = props.project;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl sm:h-64 lg:h-72">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Time required: {time}Min</p>
          <div className="card-actions">
            <button
              onClick={() => calculateWorkingTime(time)}
              className="btn btn-sm btn-primary w-full"
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
