import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarTab = ({key,iconUrl,label,routeUrl}) => {
    //console.log(routeUrl)
  return (<>
   <NavLink to={routeUrl}>
    <div key={key} className='h-8  text-slate-300 flex gap-4 items-center hover:cursor-pointer font-semibold'>
       <img src={iconUrl} width={20} height={20} className='invert' />
       {true && <p className='flex-1'>{label}</p>}
    </div>
    </NavLink>
    </>
  )
}

export default SidebarTab