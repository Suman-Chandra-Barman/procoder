import React from "react";
import Project from "../Project/Project";

const Projects = ({ projects }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {projects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </div>
  );
};

export default Projects;
