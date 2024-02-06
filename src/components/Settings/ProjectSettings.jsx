import React from "react";
import ProjectsList from "../ProjectsList";
import { NavLink } from "react-router-dom";

const ProjectSettings = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="section-head">Projects</h2>
        <NavLink to="/settings/projects/new">
          <span className="button-small">+ Project</span>
        </NavLink>
      </div>

      <ProjectsList />
    </div>
  );
};

export default ProjectSettings;
