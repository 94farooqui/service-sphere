import React from "react";
import BugHeader from "./BugHeader";
import BugStatusCard from "./BugStatusCard";
import BugAuthor from "./BugAuthor";
import BugAssigneeCard from "./BugAssigneeCard";
import BugPropertiesCard from "./BugPropertiesCard";
import BugConversations from "./BugConversations";

const BugDetailsCard = ({ bug }) => {
  //console.log(bug)
  return (
    <div className="grid grid-cols-[auto_280px] gap-4">
      
      <div className=" p-6 flex flex-col gap-8 ">
        <BugHeader bug={bug} />
        <BugConversations bug={bug}/> 
      </div>
      
      <div className="h-screen flex flex-col gap-2 p-4 border-l border-slate-300">
        <BugStatusCard/>
        <BugAuthor/>
        <BugAssigneeCard/>
        <BugPropertiesCard/>
      </div>

    </div>
  );
};

export default BugDetailsCard;
