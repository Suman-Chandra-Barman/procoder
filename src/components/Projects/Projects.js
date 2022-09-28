import React from "react";
import Project from "../Project/Project";

const Projects = ({ projects }) => {
  return (
    <div>
      <div className="text-md font-bold text-xl ml-2">
        <h4>Select today’s practice</h4>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-7">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
