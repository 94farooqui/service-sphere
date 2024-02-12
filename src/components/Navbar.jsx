import React, { useContext } from "react";
import HeaderContext from "../context/HeaderContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {headerText,setHeaderText} = useContext(HeaderContext)
  return (
    <nav className="w-full h-full text-black py-4 px-8 bg-white sticky top-0 left-0 drop-shadow-sm z-40">
      <div className="flex justify-between items-center">
        <h2 className="text-slate-500 font-bold text-xl">{headerText}</h2>
        <NavLink to='/new-bug'><span className="button-small">+ Bug</span></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
