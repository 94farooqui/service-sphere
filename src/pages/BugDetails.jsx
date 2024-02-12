import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bugs } from "./../../data";
import BugDetailsCard from "../components/Bugs/BugDetailsCard";
import HeaderContext from "../context/HeaderContext";
import { getBug } from "../helpers/bugHelper";
import { useQuery } from "@tanstack/react-query";

const BugDetails = () => {
  const params = useParams();


  useEffect(()=>{
  
  },[])


    return (
      <div className="">
        <BugDetailsCard id={params.id} />
      </div>
    );
};

export default BugDetails;
