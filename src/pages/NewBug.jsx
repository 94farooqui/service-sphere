import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../context/HeaderContext";
import { bugs } from "../../data";
import {addingBug} from './../helpers/bugHelper.js'

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
  const { headerText, setHeaderText } = useContext(HeaderContext);
  const [bug, setBug] = useState(initialBugValues);
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderText("New Bug");
  }, []);

  const onValueChange = (e) => {
    setBug((previous) => ({ ...previous, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const added = await addingBug(bug);
    if(added){
        setBug(initialBugValues)
        navigate(-1)
    }
  };
  return (
    <div className="p-8">
      <div className="bg-white p-6 rounded-lg drop-shadow-md">
        <form
          onSubmit={(event) => handleFormSubmit(event)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-600">Title</label>
            <input
              className="bg-transparent border border-slate-300 rounded-md p-2"
              id="bug-title"
              name="name"
              onChange={e => onValueChange(e)}
              value={bug.name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-600">Description</label>
            <textarea
              className="bg-transparent border border-slate-300 rounded-md p-2 resize-none"
              rows={4}
              id="bug-title"
              name="description"
              onChange={e => onValueChange(e)}
              value={bug.description}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-600">Project</label>
            <select
              className="bg-transparent border border-slate-300 rounded-md p-2"
              id="project"
              name="project"
              onChange={e => onValueChange(e)}
              value={bug.project}
            >
              {bugs.map((bug) => (
                <option key={bug.project} value={bug.project}>
                  {bug.project}
                </option>
              ))}
            </select>
          </div>
          <div className="self-end flex gap-2 mt-4">
          <button
            className="bg-red-400 text-white font-semibold self-end px-4 py-2 rounded-md"
            onClick={()=>navigate(-1)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white font-semibold self-end px-4 py-2 rounded-md"
          >
            Submit
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default bug;
