import React, { useContext } from 'react'
import {sidebar} from './../../data'
import SidebarTab from '../shared/SidebarTab'
import Logout from './../../public/assets/log_out_icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from './../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  const auth = useSelector((state)=>(state.auth))
  const dispatch = useDispatch()
  const handleLogout = (e) => {
    localStorage.removeItem("jwtToken")
    dispatch(logout())
  }
  //console.log(sidebar)
  return (
    <div className='h-full max-h-screen w-[240px] bg-neutral-950 fixed top-0 left-0 z-20 p-2 flex items-center'>
       <div className='h-full flex flex-col w-full '>
       <h1 className='text-slate-200 font-bold my-4 text-2xl '>Service Sphere</h1>
        <div className='flex flex-col items-start gap-2 pl-6 '>
        {sidebar.map(tab => <SidebarTab key={tab.label} label={tab.label} iconUrl={tab.iconUrl} routeUrl={tab.routeUrl} />)}
        </div>
        <div className='bg-neutral-900 mt-auto mx-auto p-2 rounded-md'>
          {auth.isAuthenticated ? 
          <button onClick={(e)=>{handleLogout(e)}} className='text-slate-200 flex gap-4 items-center'><img className='invert inline' src={Logout}/>{auth.user.firstname +" "+auth.user.lastname}</button>
        :<button onClick={()=>navigate('/login')}>Login</button>}
        </div>
        {/* <button onClick={()=>setOpen(!open)} className='rounded-full bg-slate-900 border border-gray-900 w-6 h-6 absolute top-12 -right-3 z-20'><img src='/assets/arrow.svg' className='w-6 h-6  invert' /></button> */}
       </div>
    </div>
  )
}

export default Sidebar