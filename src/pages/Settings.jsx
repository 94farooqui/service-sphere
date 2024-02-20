import React, { useContext, useEffect } from "react";
import { projects } from "../../data";
import ProjectCard from "../components/ProjectCard";
import { NavLink, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import ProjectsList from "../components/ProjectsList";
import ProjectSettings from "../components/Settings/ProjectSettings";
import DomainSettings from "../components/Settings/DomainSettings";
import axios from "axios";
import { useSelector } from "react-redux";

const Settings = () => {
  const auth = useSelector((state)=>state.auth)
  const navigate = useNavigate()
  const user = useLoaderData()

  // useEffect(()=>{
    
  //   if(!user){
  //     console.log("User:",user)
  //     navigate('/login')
  //   }
  // },[user])
  useEffect(()=>{
    console.log(auth)
  },[])

  if(auth.isLoading) return <Navigate to='/login' />

  return (
    <div className="p-8">
      <div className="page-flex">
        <ProjectSettings />
        <DomainSettings />
      </div>
    </div>
  );
};

export default Settings;
