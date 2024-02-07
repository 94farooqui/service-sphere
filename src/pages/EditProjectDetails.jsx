import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectDetails } from "../helpers/projectHelper";
import HeaderContext from "../context/HeaderContext";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DomainsList from "../components/DomainsList";

const teamDefault = {
  domain: "",
  members: [],
};

const EditProjectDetails = () => {
  const { headerText, setHeaderText } = useContext(HeaderContext);

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

  const savechanges = (e) => {
    e.preventDefault()

  }

  useEffect(() => {
    getProject(id);
  }, [id]);
  if (!project) return null;

  return (
    <div className="p-9 h-full ">
      <div className="h-full page-flex overflow-scroll">
        <div>
          <h2 className="section-head">Description</h2>
          <p className="card">{project.description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between relative">
            <h2 className="section-head">Teams</h2>
            <button className="bg-neutral-900 text-white rounded-md p-2">
              Add team
            </button>
            <select
              onChange={(e) => onDomainSelect(e)}
              className="absolute z-10 top-12 right-0 py-2 px-6 bg-white text-slate-700 border rounded-md"
            >
              <DomainsList />
            </select>
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
      <div className="fixed bg-white p-2 w-full bottom-0 left-0 border-t flex justify-center items-center gap-4">
        <button className="button-secondary">Cancel</button>
        <button onClick={(e)=>savechanges(e)} className="button-primary">Save</button>
      </div>
    </div>
  );
};

export default EditProjectDetails;
