import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getProjectDetails } from "../helpers/projectHelper";
import HeaderContext from "../context/HeaderContext";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DomainsList from "../components/DomainsList";

const teamDefault = {
  domain: "",
  members: [],
};

const ProjectDetails = () => {
  const { headerText, setHeaderText } = useContext(HeaderContext);
  const location = useLocation()

  const [project, setProject] = useState();
  const { id } = useParams();
  //console.log(id);

  const [teams, setTeams] = useState();
  const [team, setTeam] = useState(teamDefault);

  const onDomainSelect = (e) => {
    console.log(teams);
    setTeams([...teams, { name: e.target.value, members: [] }]);
    // teams.push(team)
    //project.teams.push({name:e.target.value, members:[]})
  };

  const getProject = async (id) => {
    const data = await getProjectDetails(id);
    setProject(data);
    setTeams(data.teams);
    setHeaderText(data.name);
  };

  useEffect(() => {
    getProject(id);
  }, [id]);
  if (!project) return null;

  return (
    <div className="p-9 h-full ">
      <div className="h-full page-flex overflow-y-scroll no-scrollbar">
        <div className="flex justify-between">
            <h2 className="section-head">Description</h2>
            <span className="button-secondary-light hover:text-neutral-950 hover:border-neutral-950 text-center"><NavLink to={`${location.pathname}/edit`}>Edit</NavLink></span>
        </div>
        <div>
          <p className="card">{project.description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between relative">
            <h2 className="section-head">Teams</h2>
          </div>
          {teams.length > 0 && (
            <div className="flex flex-col gap-2">
              {teams.map((selectedTeam) => (
                <div className="card">
                  <h2>{selectedTeam.name}</h2>
                  {selectedTeam.members &&
                    selectedTeam.members.map((member) => <p>{member.name}</p>)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
