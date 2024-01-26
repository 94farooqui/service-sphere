import React from 'react'
import getStatusColor from '../../utilities/getStatusColors'


const BugHeader = ({bug}) => {
    const statusColor = getStatusColor(bug.status)
    //console.log(bug)
  return (
    <div className='bg-white p-8 rounded-lg grid grid-cols-1 gap-4 shadow-sm'>
        <h4 className="text-xl font-semibold  text-slate-800">{bug.name}</h4>
        <p>{bug.description}</p>
        <div className='grid grid-cols-2 gap-4 mt-2'>
            <div className="flex flex-col">
                <h4 className='font-semibold text'>Project</h4>
                <p>{bug.project.name}</p>
            </div>
            <div className="flex flex-col">
                <h4 className='font-semibold text'>Requester</h4>
                <p>{bug.author.firstname}</p>
            </div>
            <div className="flex flex-col">
                <h4 className='font-semibold text'>Date</h4>
                <p>{bug.dateCreated.toLocaleString()}</p>
            </div>
            <div className="flex flex-col">
                <h4 className='font-semibold text'>Status</h4>
                <p className='self-start px-2 rounded-full text-sm' style={{backgroundColor : statusColor}}>{bug.status}</p>
            </div>
        </div>
    </div>
  )
}

export default BugHeader