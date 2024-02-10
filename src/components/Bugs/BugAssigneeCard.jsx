import React from 'react'
import {users} from './../../../data.js'

const BugAssigneeCard = () => {
  return (
    <div className='card bg-white p-4 rounded-md border'>
      <div  className='flex flex-col gap-2'>
        <p className='text-sm font-semibold te text-slate-500'>People working</p>
        <div className='flex'>
        {users.map((user,index) => {
          if(index<5){
            return <div className={`w-8 h-8 bg-slate-900 rounded-full border-2 border-white -mr-2 `}><p className='text-white text-xs text-center m-1'>{user.name.split(" ")[0][0].toUpperCase()+user.name.split(" ")[1][0].toUpperCase()}</p></div>
          }
          
            
            
        })}
        <div className={`w-8 h-8 bg-slate-900 rounded-full border-2 border-white -mr-3 `}><p className='text-white text-xs text-center m-1'>+{users.length -5}</p></div>
        </div>
      </div>
    </div>
  )
}

export default BugAssigneeCard