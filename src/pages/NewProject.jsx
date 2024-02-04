import React, { useState } from "react";
import { createProject } from "../helpers/projectHelper";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
    const [newProject, setNewProject] = useState()
    const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const response = createProject(newProject)
    if(response){
        navigate('/settings')
    }
  };
  const onValueChange = (e) => {
    setNewProject({...newProject, [e.target.name]:e.target.value});
  };
  return (
    <div className="p-8">
      <div className="bg-white p-6 rounded-lg drop-shadow-md border">
        <form
          onSubmit={(event) => handleFormSubmit(event)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-600">Name</label>
            <input
              className="bg-transparent border border-slate-300 rounded-md p-2"
              id="bug-title"
              name="name"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-600">Description</label>
            <textarea
              rows={3}
              className="bg-transparent border border-slate-300 rounded-md p-2 resize-none"
              id="bug-title"
              name="description"
              onChange={(e) => onValueChange(e)}
            ></textarea>
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

export default NewProject;
