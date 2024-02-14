import React, { useEffect, useState } from "react";
import { getAllDomains } from "../../helpers/domainHelper";
import Logo from './../../../public/logo.jpg'

const DomainsList = () => {
  const [domains, setDomains] = useState();
  const gettingDomains = async () => {
    const data = await getAllDomains();
    setDomains(data);
  };

  useEffect(() => {
    gettingDomains();
  }, []);

  if (!domains) return null;
  return (
    <div className="grid grid-cols-2 gap-4">
      {domains.map((domain) => (
        <div key={domain.name} className="card-shadow flex items-center">
        <img width={120} height={80} src={Logo} className="border-r" />
          <div className="p-4">
            <h2 className="font-bold">{domain.name}</h2>
            <p>{domain.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DomainsList;
