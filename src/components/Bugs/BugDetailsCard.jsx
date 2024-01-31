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
    <div className="grid grid-cols-[auto_280px]">
      
      <div className=" flex flex-col gap-8 p-4 ">
        <BugHeader bug={bug} />
        <div>
          <h2 className="text-xl font-bold text-slate-700 mb-2">Description</h2>
          <p  className="bg-white rounded-md p-4">{bug.description}</p>
        </div>
        <BugConversations bug={bug}/> 
      </div>
      <div className="h-[calc(100vh-60px)] flex flex-col justify-between  p-4 border-l border-slate-300">
        <div className="h-full flex flex-col gap-3 ">
          <BugStatusCard bug={bug}/>
          <BugAuthor/>
          <BugAssigneeCard/>
          <BugPropertiesCard/>
        </div>
        <button className="bg-slate-800 text-white p-2 rounded-md">Submit</button>
      </div>
    </div>
  );
};

export default BugDetailsCard;
