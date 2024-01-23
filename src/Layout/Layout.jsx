import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Sidebar/>
      <div className='w-screen '>
        <nav className="pl-[220px]">
          <Navbar/>
        </nav>
        
        <div className='xl:w-[1140px] lg:w-[932px] md:w-[708px] sm:w-[516px] max-w-[1080px] mx-auto flex flex-col'>
        
        <main>
          <Outlet/>
        </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
