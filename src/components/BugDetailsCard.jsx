import React from "react";
import BugHeader from "./BugHeader";
import BugStatusCard from "./BugStatusCard";
import BugAuthor from "./BugAuthor";
import BugAssigneeCard from "./BugAssigneeCard";
import BugPropertiesCard from "./BugPropertiesCard";
import BugConversations from "./BugConversations";

const BugDetailsCard = ({ bug }) => {
  return (
    <div className="grid grid-cols-[auto_280px] gap-4">
      
      <div className=" p-6 grid grid-cols-1 gap-4 border-r border-slate-300 drop-shadow-sm">
        <BugHeader bug={bug} />
        <div>
            <h4 className="text-xl font-bold text-slate-700 mb-2">Conversations</h4>
            <BugConversations />
        </div>
        
      </div>
      
      <div className="flex flex-col gap-2 p-4">
        <BugStatusCard/>
        <BugAuthor/>
        <BugAssigneeCard/>
        <BugPropertiesCard/>
      </div>

    </div>
  );
};

export default BugDetailsCard;
