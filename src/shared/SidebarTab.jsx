import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarTab = ({key,iconUrl,label,routeUrl}) => {
    //console.log(routeUrl)
  return (<>
   <NavLink to={routeUrl}>
    <div key={key} className='h-8  text-slate-300 flex gap-2 items-center hover:cursor-pointer text-sm'>
        <span className='w-8 h-8 text-slate-200 p-1'><img src={iconUrl} /></span>
       {true && <p className='flex-1'>{label}</p>}
    </div>
    </NavLink>
    </>
  )
}

export default SidebarTab