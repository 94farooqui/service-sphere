import React from 'react'
import {sidebar} from './../../data'
import SidebarTab from '../shared/SidebarTab'

const Sidebar = () => {
  //console.log(sidebar)
  return (
    <div className='h-screen max-h-screen bg-slate-900 flex flex-col sticky top-0 left-0 z-20'>
        <h1 className='text-white font-bold my-4 text-2xl italic text-center'>Service Sphere</h1>
        <div className='flex flex-col gap-2  py-4 px-4'>
        {sidebar.map(tab => <SidebarTab key={tab.label} label={tab.label} iconUrl={tab.iconUrl} routeUrl={tab.routeUrl} />)}
        </div>
        <button onClick={()=>setOpen(!open)} className='rounded-full bg-slate-900 border border-black w-6 h-6 absolute top-12 -right-3 z-20'><img src='/assets/arrow.svg' className='w-6 h-6  invert' /></button>
    </div>
  )
}

export default Sidebar