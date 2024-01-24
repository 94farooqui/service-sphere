import React from 'react'

const BugHeader = ({bug}) => {
  return (
    <div className='bg-white p-8 rounded-lg grid grid-cols-1 gap-4 shadow-sm'>
        <h4 className="text-xl font-semibold  text-slate-800">{bug.name}</h4>
        <p>{bug.description}</p>
        <div className='grid grid-cols-2 gap-4 mt-2'>
            <div className="flex flex-col">
                <h4 className='font-semibold text'>Project</h4>
                <p>{bug.project}</p>
            </div>
            <div className="flex flex-col">
                <h4 className='font-semibold text'>Requester</h4>
                <p>{bug.author}</p>
            </div>
            <div className="flex flex-col">
                <h4 className='font-semibold text'>Date</h4>
                <p>{bug.dateCreated.toLocaleString()}</p>
            </div>
            <div className="flex flex-col">
                <h4 className='font-semibold text'>Status</h4>
                <p>{bug.status}</p>
            </div>
        </div>
    </div>
  )
}

export default BugHeader