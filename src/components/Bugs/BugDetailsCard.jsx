import React, { useState } from "react";
import BugHeader from "./BugHeader";
import BugStatusCard from "./BugStatusCard";
import BugAuthor from "./BugAuthor";
import BugAssigneeCard from "./BugAssigneeCard";
import BugPropertiesCard from "./BugPropertiesCard";
import BugConversations from "./BugConversations";
import { updateBug } from "../../helpers/bugHelper";

const BugDetailsCard = ({ bug }) => {
  //console.log(bug)
  const [bugDetails,setBugDetails] = useState(bug)

  const onsubmit = async (e) => {
  const response = await updateBug(bugDetails) 
  }
  return (
    <div className="grid grid-cols-[auto_280px]">
      
      <div className="page-flex  p-4 ">
        <BugHeader bug={bug} />
        <div className="">
          <h2 className="section-head">Description</h2>
          <p  className="card">{bug.description}</p>
        </div>
        <BugConversations bug={bug}/> 
      </div>
      <div className="h-[calc(100vh-60px)] flex flex-col justify-between  p-4 border-l border-slate-300">
        <div className="h-full page-flex ">
          <BugStatusCard bug={bug}/>
          <BugAuthor/>
          <BugAssigneeCard/>
          <BugPropertiesCard bug={bugDetails} setBug={setBugDetails}/>
        </div>
        <button onClick={(e)=>onsubmit(e)} className="bg-slate-800 text-white p-2 rounded-md">Submit</button>
      </div>
    </div>
  );
};

export default BugDetailsCard;
