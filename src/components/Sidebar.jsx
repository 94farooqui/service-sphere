import React from 'react'
import {sidebar} from './../../data'
import SidebarTab from '../shared/SidebarTab'

const Sidebar = () => {
  //console.log(sidebar)
  return (
    <div className='h-screen max-h-screen w-[220px] max-w-[220px] overflow-hidden fixed left-0 top-0 bg-slate-900 flex justify-center'>
        <div className='flex flex-col gap-2  py-4 px-6'>
        {sidebar.map(tab => <SidebarTab key={tab.label} label={tab.label} iconUrl={tab.iconUrl} routeUrl={tab.routeUrl} />)}
        {/* {sidebar.map(tab => console.log(tab))} */}
        </div>
    </div>
  )
}

export default Sidebar