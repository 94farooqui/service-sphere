import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../context/HeaderContext";
import { bugs } from "../../data";
import { addingBug } from "./../helpers/bugHelper.js";
import { getAllProjects } from "../helpers/projectHelper.js";
import { bugTypes} from './../../data.js'
import {priority} from './../../data.js'

const initialBugValues = {
  name: "",
  description: "",
  author: "",
  project: "",
  assignee: "",
  status: "",
  comms: [],
  __v: 0,
};

const bug = () => {
  const [allProjects, setAllProjects] = useState([]);
  const { headerText, setHeaderText } = useContext(HeaderContext);
  const [bug, setBug] = useState(initialBugValues);
  const navigate = useNavigate();

  const gettingAllProject = async () => {
    const data = await getAllProjects();
    setAllProjects(data);
  };

  useEffect(() => {
    gettingAllProject();
    console.log(allProjects);
    setHeaderText("New Bug");
  }, []);

  const onValueChange = (e) => {
    setBug((previous) => ({ ...previous, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const added = await addingBug(bug);
    if (added) {
      setBug(initialBugValues);
      navigate(-1);
    }
  };
  return (
    <div className="p-8">
      <div className="bg-white p-6 rounded-lg drop-shadow-md border">
        <form
          onSubmit={(event) => handleFormSubmit(event)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="input-label-style">Title</label>
            <input
              className="input-style"
              id="bug-title"
              name="name"
              onChange={(e) => onValueChange(e)}
              value={bug.name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="input-label-style">Description</label>
            <textarea
              className="input-style resize-none"
              rows={4}
              id="bug-title"
              name="description"
              onChange={(e) => onValueChange(e)}
              value={bug.description}
            />
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-1 flex-1">
              <label className="input-label-style">Project</label>
              <select
                className="input-style "
                id="project"
                name="project"
                onChange={(e) => onValueChange(e)}
                value={bug.project}
              >
                {allProjects ? (
                  allProjects.map((project) => (
                    <option key={project._id} value={project.name}>
                      {project.name}
                    </option>
                  ))
                ) : (
                  <option>No Project</option>
                )} 
              </select>
            </div>

            


            <div className="flex flex-col gap-1  flex-1">
              <label className="input-label-style">Priority</label>
              <select
                className="input-style"
                id="priority"
                name="priority"
                onChange={(e) => onValueChange(e)}
                value={bug.project}
              >
                {priority ? (
                  priority.map((p) => (
                    <option key={p.name} value={p.label}>
                      {p.label}
                    </option>
                  ))
                ) : (
                  <option>No Project</option>
                )}
              </select>
            </div>
            <div className="flex flex-col gap-1  flex-1">
              <label className="input-label-style">Bug type</label>
              <select
                className="input-style"
                id="type"
                name="type"
                onChange={(e) => onValueChange(e)}
                value={bug.project}
              >
                {bugTypes ? (
                  bugTypes.map((type) => (
                    <option key={type.name} value={type.label}>
                      {type.label}
                    </option>
                  ))
                ) : (
                  <option>No Project</option>
                )}
              </select>
            </div>
          </div>

          <div className="self-end flex gap-2 mt-4">
            <button className="button-secondary" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit" className="button-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default bug;
