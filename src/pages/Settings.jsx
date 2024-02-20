import React, { useContext, useEffect } from "react";
import { projects } from "../../data";
import ProjectCard from "../components/ProjectCard";
import { NavLink, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import ProjectsList from "../components/ProjectsList";
import ProjectSettings from "../components/Settings/ProjectSettings";
import DomainSettings from "../components/Settings/DomainSettings";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, login, logout } from "../redux/auth/authSlice";

const Settings = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => (state.auth))
  useEffect(()=>{
    console.log("From Settings")
    if(!auth.isAuthenticated) navigate('/login')
  },[auth.isAuthenticated, navigate])

  return auth.isAuthenticated ? (
    <div className="p-8">
      <div className="page-flex">
        <ProjectSettings />
        <DomainSettings />
      </div>
    </div>
  ) : <div><h2>Loading...</h2></div> 
};

export default Settings;
