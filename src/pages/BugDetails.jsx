import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bugs } from "./../../data";
import BugDetailsCard from "../components/Bugs/BugDetailsCard";
import HeaderContext from "../context/HeaderContext";
import { getBug } from "../helpers/bugHelper";

const BugDetails = () => {
  const {headerText,setHeaderText} = useContext(HeaderContext)
  const [bug,setBug] = useState();
  const params = useParams();
  const id = params.id;
  //const bug = bugs.find((bug) => bug._id === id);

  const gettingBugDetails = async () => {
    const data = await getBug(id);
    //console.log(data)
    setBug(data)
    setHeaderText( "All Bugs > " + data.bug_id)
  }

  useEffect(()=>{
    
    gettingBugDetails()
  },[])

  if(bug){
   
    return (
      <div className="">
        <BugDetailsCard bug={bug} />
      </div>
    );
  }
};

export default BugDetails;
