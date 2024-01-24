import React, { useContext, useEffect } from "react";
import { bugs } from "./../../data";
import BugSmallCard from "../components/Bugs/BugSmallCard";
import HeaderContext from "../context/HeaderContext";

const AllBugs = () => {
    const {headerText,setHeaderText} = useContext(HeaderContext)

    useEffect(()=>{
        setHeaderText("All Bugs")
    },[])
  return (
    <div className=" p-8  grid grid-cols-1 gap-4">
      {bugs.map((bug) => (
        <BugSmallCard
          _id={bug._id}
          bug_id={bug.bug_id}
          name={bug.name}
          dateCreated={bug.dateCreated}
          status={bug.status}
        />
      ))}
    </div>
  );
};

export default AllBugs;
