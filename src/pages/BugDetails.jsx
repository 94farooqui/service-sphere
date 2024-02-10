import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bugs } from "./../../data";
import BugDetailsCard from "../components/Bugs/BugDetailsCard";
import HeaderContext from "../context/HeaderContext";
import { getBug } from "../helpers/bugHelper";
import { useQuery } from "@tanstack/react-query";

const BugDetails = () => {
  const params = useParams();
  const {data:bug, isLoading, error} = useQuery({queryKey:["todo",params.id], queryFn:()=>getBug(params.id)})
  const {headerText,setHeaderText} = useContext(HeaderContext)

  useEffect(()=>{
  
  },[])

  if(isLoading) return <p>Loading..</p>

  if(error) return <p>{error}</p>

    return (
      <div className="">
        <BugDetailsCard bug={bug} />
      </div>
    );
};

export default BugDetails;
