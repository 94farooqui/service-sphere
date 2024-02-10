import React, { useContext, useEffect, useState } from "react";
import { bugs } from "./../../data";
import BugSmallCard from "../components/Bugs/BugSmallCard";
import HeaderContext from "../context/HeaderContext";
import { getAllBugs } from "../helpers/bugHelper";
import { useQuery } from "@tanstack/react-query";

const AllBugs = () => {
  const {data:allBugs, isLoading, error} = useQuery({queryKey:["bugs"], queryFn:getAllBugs})

    const {headerText,setHeaderText} = useContext(HeaderContext)

    useEffect(()=>{
        setHeaderText("All Bugs")
    },[])

    if(isLoading) return <h2>Loading...</h2>

    if(error) return <h2>{error}</h2>

    if(allBugs){
      return (
        <div className=" p-8  grid grid-cols-1 gap-4">
          {allBugs.map((bug) => (
            <BugSmallCard
              key={bug._id}
              bug={bug}
            />
          ))}
        </div>
      );
    }
 
};

export default AllBugs;
