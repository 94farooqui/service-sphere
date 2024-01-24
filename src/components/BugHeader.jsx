import React from 'react'

const BugHeader = ({bug}) => {
  return (
    <div className='bg-white'>
        <h4 className="text-xl font-semibold  text-slate-800">{bug.name}</h4>
        <div className="flex justify-between">
          <p>{bug.author}</p>
          <p>{bug.dateCreated.toLocaleString()}</p>
        </div>
        <div className="flex justify-between">
          <p>{bug.assignee}</p>
          <p>{bug.status}</p>
        </div>
    </div>
  )
}

export default BugHeader