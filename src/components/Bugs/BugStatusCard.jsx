import React from 'react'
import {statusColors} from './../../../data.js'
import getStatusColor from '../../utilities/getStatusColors.js'

const BugStatusCard = ({bug}) => {
  return (
    <div className='bg-white p-2 rounded-md text-sm'>
      <div className='flex flex-col gap-2 text-slate-500'>
        <p className='font-semibold'>Status: <span className='px-2 rounded-full text-white' style={{backgroundColor: getStatusColor(bug.status)}}>{bug.status}</span></p>
        <span className='flex flexitems-center gap-2'>
          <p className='font-semibold'>Priority:</p>
          <div className='flex items-center gap-1'>
            <div className='w-3 h-3 rounded-full bg-indigo-400'></div>
            <p>Medium</p>
          </div>
        </span>
        <p className='font-semibold'>Resolution due: <br/> <span className='font-normal'>{bug.dateCreated.toLocaleString()}</span></p>
       
      </div>
    </div>
  )
}

export default BugStatusCard