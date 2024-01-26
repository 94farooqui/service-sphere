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
      
      <div className=" p-6 flex flex-col gap-4 ">
        <BugHeader bug={bug} />
        <div>
            <h4 className="text-xl font-bold text-slate-700 mb-2">Conversations</h4>
            {bug.comms.length > 0 ? <BugConversations comms={bug.comms} /> : <p>No comments</p>}
        </div>
        
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
