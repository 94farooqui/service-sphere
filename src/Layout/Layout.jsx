import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className={`relative h-screen w-screen grid grid-cols-[240px_auto] grid-rows-[60px_auto]`}>
      <div className="row-start-1 row-end-3 col-start-1 col-end-2 relative bg-pink-300 flex justify-center">
        <Sidebar/>
      </div>
      <div className="row-start-1 row-end-2 col-start-2 col-end-3 sticky top-0 left-0 z-10">
        <Navbar/>
      </div>
      <div className="row-start-2 row-end-3 col-start-2 col-end-3 bg-white">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
