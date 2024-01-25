import React, { useContext, useEffect, useState } from "react";
import { bugs } from "./../../data";
import BugSmallCard from "../components/Bugs/BugSmallCard";
import HeaderContext from "../context/HeaderContext";
import { gettingAllBugs } from "../helpers/bugHelper";

const AllBugs = () => {
    const {headerText,setHeaderText} = useContext(HeaderContext)
    const [allBugs,setAllBugs] = useState([])

    const getBugs = async () => {
      const data = await gettingAllBugs();
      //console.log(data)
      setAllBugs(data)
    }

    useEffect(()=>{
        setHeaderText("All Bugs")
        getBugs();
    },[])

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
