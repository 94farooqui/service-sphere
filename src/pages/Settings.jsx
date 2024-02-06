import React from "react";
import { projects } from "../../data";
import ProjectCard from "../components/ProjectCard";
import { NavLink } from "react-router-dom";
import ProjectsList from "../components/ProjectsList";
import ProjectSettings from "../components/Settings/ProjectSettings";
import DomainSettings from "../components/Settings/DomainSettings";

const Settings = () => {
  return (
    <div className="p-8">
      <div className="page-flex">
        <ProjectSettings />
        <DomainSettings />
      </div>
    </div>
  );
};

export default Settings;
