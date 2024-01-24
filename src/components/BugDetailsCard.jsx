import React from "react";
import BugHeader from "./BugHeader";
import BugStatusCard from "./BugStatusCard";
import BugAuthor from "./BugAuthor";
import BugAssigneeCard from "./BugAssigneeCard";
import BugPropertiesCard from "./BugPropertiesCard";

const BugDetailsCard = ({ bug }) => {
  return (
    <div className="grid grid-cols-[auto_280px] gap-4">
      
      <div className=" p-6 grid grid-cols-1 border-r border-slate-300 drop-shadow-sm">
        <BugHeader bug={bug} />
        
        
      </div>
      
      <div className="h-screen grid grid-cols-1 gap-2 py-4">
        <BugStatusCard/>
        <BugAuthor/>
        <BugAssigneeCard/>
        <BugPropertiesCard/>
      </div>

    </div>
  );
};

export default BugDetailsCard;
