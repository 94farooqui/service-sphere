import React from "react";
import { NavLink } from "react-router-dom";
import DomainsList from "./DomainsList";

const DomainSettings = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="section-head">Domains</h2>
        <NavLink to="/settings/domains/new">
          <span className="button-small">+ Domain</span>
        </NavLink>
      </div>
      <DomainsList/>
    </div>
  );
};

export default DomainSettings;
