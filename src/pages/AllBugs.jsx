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
          bug={bug}
        />
      ))}
    </div>
  );
};

export default AllBugs;
