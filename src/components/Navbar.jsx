import React, { useContext } from "react";
import HeaderContext from "../context/HeaderContext";

const Navbar = () => {
  const {headerText,setHeaderText} = useContext(HeaderContext)
  return (
    <nav className="w-full h-full text-black py-4 px-8 bg-gray-100 sticky top-0 left-0 drop-shadow-sm">
      <div>
        <h2 className="text-slate-500 font-bold text-xl">{headerText}</h2>
      </div>
    </nav>
  );
};

export default Navbar;
