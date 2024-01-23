import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './src/components/Sidebar'
import Navbar from './src/components/Navbar'

const Layout = () => {
  return (
    <>
      <Sidebar/>
      <div>
        <nav>
          <Navbar/>
        </nav>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default Layout