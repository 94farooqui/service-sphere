import React, { useEffect, useState } from "react";
import { getAllDomains } from "../helpers/domainHelper";

const DomainsList = () => {
  const [domainsList, setDomainsList] = useState();

  const gettingDomains = async () => {
    const data = await getAllDomains();
    setDomainsList(data);
  };
  useEffect(() => {
    gettingDomains();
  }, []);

  if (!domainsList) return null;

  return (
    <>
        {domainsList.map(domain => <option key={option._id} className="px-4 text-slate-600" value={domain.name}>{domain.name}</option>)}
      </>
  );
};

export default DomainsList;
