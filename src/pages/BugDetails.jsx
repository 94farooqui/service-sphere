import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bugs } from "./../../data";
import BugDetailsCard from "../components/Bugs/BugDetailsCard";
import HeaderContext from "../context/HeaderContext";

const BugDetails = () => {
  const {headerText,setHeaderText} = useContext(HeaderContext)
  const params = useParams();
  const id = parseInt(params.id);
  const bug = bugs.find((bug) => bug._id === id);

  useEffect(()=>{
    setHeaderText( "All Bugs > " + bug.bug_id)
  },[])

  if (!bug) return null;

  return (
    <div className="">
      <BugDetailsCard bug={bug} />
    </div>
  );
};

export default BugDetails;
