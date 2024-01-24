import React, { useContext, useEffect } from "react";
import { dashboardTiles } from "./../../data";
import DashCard from "../components/Dashboard/DashCard";
import HeaderContext from "../context/HeaderContext";

const Home = () => {
  const {headerText,setHeaderText} = useContext(HeaderContext)
  useEffect(()=>{
    setHeaderText("Home")
  },[])
  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dashboardTiles.map((tile) => (
          <DashCard tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default Home;
