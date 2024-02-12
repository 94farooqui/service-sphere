import React from 'react'
import {statusColors} from './../../../data.js'
import getStatusColor from '../../utilities/getStatusColors.js'

const BugStatusCard = ({status,dateToSolve}) => {
  const priority = "Medium"
  return (
    <div className='card bg-white p-2 rounded-md text-sm border'>
      <div className='flex flex-col gap-2 text-slate-500'>
        <p className='text-sm font-semibold te text-slate-500'>Status: <span className='px-2 rounded-full text-white' style={{backgroundColor: getStatusColor(status)}}>{status}</span></p>
        <span className='flex flexitems-center gap-2'>
          <p className='text-sm font-semibold te text-slate-500'>Priority:</p>
          <div className='flex items-center gap-1'>
            <div className='w-3 h-3 rounded-full bg-indigo-400'></div>
            <p> {priority}</p>
          </div>
        </span>
        <p className='text-sm font-semibold te text-slate-500'>Resolution due: <br/> <span className='font-normal'>{dateToSolve.toLocaleString()}</span></p>
       
      </div>
    </div>
  )
}

export default BugStatusCard