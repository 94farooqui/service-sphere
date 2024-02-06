import React, { useContext, useEffect, useRef, useState } from "react";
import HeaderContext from "../context/HeaderContext";
import onInputChange from "../utilities/onInputChange";
import { useNavigate } from "react-router-dom";
import { createDomain } from "../helpers/domainHelper";

const NewDomain = () => {
  const { headerText, setHeaderText } = useContext(HeaderContext);
  const [domain, setDomain] = useState();
  const navigate = useNavigate()

  const onCancel = (e) => {

  }

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const res = await createDomain(domain)
    if(res){
        navigate('/settings')
    }
  }
  useEffect(() => {
    setHeaderText("New Domain");
  }, []);
  return (
    <div className="p-8">
      <div className="card">
        <form onSubmit={(e) => onFormSubmit(e)} className="form-style">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input
              onChange={(e) => onInputChange(e, domain, setDomain)}
              name="name"
              type="text"
              className="input-style"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Description</label>
            <textarea
              onChange={(e) => onInputChange(e, domain, setDomain)}
              name="description"
              type="text"
              rows={2}
              className="input-style resize-none"
            />
          </div>
          <div className="self-end flex gap-2 mt-4">
            <button onClick={(e)=>onCancel(e)} className="button-secondary">Cancel</button>
            <button type="submit" className="button-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewDomain;
