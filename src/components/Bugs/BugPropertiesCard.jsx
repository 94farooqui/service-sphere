import React from 'react'

const BugPropertiesCard = () => {
  return (
    <div className='bg-white p-2 rounded-md'>
      <div>
        <p className='text-sm font-semibold te text-slate-500'>Properties</p>
        <form className='text-sm'>
          <div>
            <label>Project</label>
            <select className='ml-2 border p-2 rounded-md'>
              <option>Project A</option>
              <option>Project B</option>
              <option>Project C</option>
              <option>Project D</option>
            </select>
          </div>
          <div>
          <label>Priority</label>
          <select className='ml-2 border p-2 rounded-md'>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low A</option>
              
            </select>
          </div>
          <div>
          <label>Status</label>
          <select className='ml-2 border p-2 rounded-md'>
              <option>Open</option>
              <option>Pending</option>
              <option>Closed</option>
            </select>
          </div>
          <div>
          <label>Bug type</label>
          <select className='ml-2 border p-2 rounded-md'>
              <option>System</option>
              <option>Database</option>
              <option>Front End</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BugPropertiesCard