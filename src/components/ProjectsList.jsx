import React, { useEffect, useState } from "react";
import { projects } from "../../data";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "../helpers/projectHelper";

const ProjectsList = () => {

    const [allProjects,setAllProjects] = useState()

    const gettingAllProjects = async () =>  {
        const data = await getAllProjects()
        setAllProjects(data)
    }
    useEffect(()=>{
        gettingAllProjects()
    },[])

    if(!allProjects) return null;
  return (
    <div className="grid grid-cols-4 gap-4 mt-2">
      {allProjects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
