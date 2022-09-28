import React from "react";

const Project = (props) => {
  const { name, time, picture } = props.project;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl h-72">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Time required: {time}hour</p>
          <div className="card-actions">
            <button className="btn btn-sm btn-primary">Add to list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
