import React, { useState } from 'react'
import {users} from './../../../data.js'
import AddAssigneBox from '../AddAssigneBox.jsx'

const BugAssigneeCard = () => {
  const [showAddUser,setShowAddUser] = useState(false)
  return (
    <div className='card rounded-md border'>
      <div  className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <p className='text-sm font-semibold te text-slate-500'>People working</p>
          <span className='text-xs font-bold hover:underline hover:text-slate-500 hover:cursor-pointer text-slate-400' onClick={()=>setShowAddUser(!showAddUser)} >Add User</span>
        </div>
        
        <div className='flex'>
        {users.map((user,index) => {
          if(index<5){
            return <div key={index} className={`w-8 h-8 bg-slate-900 rounded-full border-2 border-white -mr-2 `}><p className='text-white text-xs text-center m-1'>{user.name.split(" ")[0][0].toUpperCase()+user.name.split(" ")[1][0].toUpperCase()}</p></div>
          }
          
            
            
        })}
        <div className={`w-8 h-8 bg-slate-900 rounded-full border-2 border-white -mr-3 `}><p className='text-white text-xs text-center m-1'>+{users.length -5}</p></div>
        </div>
        {showAddUser && <div className='mt-2'>
          <AddAssigneBox/>
        </div>}
       
      </div>
    </div>
  )
}

export default BugAssigneeCard