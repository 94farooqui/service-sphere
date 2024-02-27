import React, { useContext, useEffect } from "react";
import { dashboardTiles } from "./../../data";
import DashCard from "../components/Dashboard/DashCard";
import HeaderContext from "../context/HeaderContext";
import {cardColors} from './../../data'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {headerText,setHeaderText} = useContext(HeaderContext)
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem("jwtToken")
    if(!token){
      navigate('/login')
    }
    setHeaderText("Home")
  },[])
  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dashboardTiles.map((tile,index) => (
          <DashCard key={index} tile={tile} color={cardColors[index].color} />
        ))}
      </div>
    </div>
  );
};

export default Home;
