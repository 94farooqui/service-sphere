import React from 'react'
import { NavLink } from 'react-router-dom'

const BugSmallCard = ({_id,bug_id,name,dateCreated,status}) => {
    //console.log(dateCreated)
  return (<>
  <NavLink to={`/bugs/${_id}`}>
    <div key={_id} className='p-4 bg-gray-100 border shadow-md rounded-md grid grid-cols-1 gap-1'>
        <p className='text-xs font-bold text-slate-500'>{bug_id}</p>
        <p className='text-sm font-semibold text-gray-700'>{name}</p>
        <div className='flex justify-between items-center text-xs text-gray-400'>
            <p>{status}</p>
            <p className=''>{dateCreated.toLocaleString()}</p>
        </div>
        
    </div>
    </NavLink>
    </>
  )
}

export default BugSmallCard