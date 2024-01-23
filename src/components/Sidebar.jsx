import React from 'react'
import {sidebar} from './../../data'
import SidebarTab from '../shared/SidebarTab'

const Sidebar = () => {
  return (
    <div className='h-screen max-h-screen w-[220px] fixed left-0 top-0 bg-slate-900 flex justify-center'>
        <div className='flex flex-col gap-2 w-[95%] p-2'>
        {sidebar.map(tab => <SidebarTab key={tab.label} label={tab.label} iconUrl={tab.iconUrl} />)}
        {/* {sidebar.map(tab => console.log(tab))} */}
        </div>
    </div>
  )
}

export default Sidebar