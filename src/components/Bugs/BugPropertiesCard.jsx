import React from 'react'

const BugPropertiesCard = ({bug,setBug}) => {
  const onValueChange = (e) => {
    setBug({...bug, [e.target.name]:e.target.value})
  } 
  return (
    <div className='card bg-white p-2 rounded-md border'>
      <div>
        <p className='text-sm font-semibold te text-slate-500'>Properties</p>
        <form className='mt-4 text-sm flex flex-col gap-2'>
          <div className='grid grid-cols-[60px_auto]'>
          <label className='self-center'>Project</label>
            <select onChange={(e)=>onValueChange(e)} className='input-select-style'>
              <option>Project A</option>
              <option>Project B</option>
              <option>Project C</option>
              <option>Project D</option>
            </select>
          </div>
          <div className='grid grid-cols-[60px_auto]'>
          <label className='self-center'>Priority</label>
          <select onChange={(e)=>onValueChange(e)} className='input-select-style'>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low A</option>
              
            </select>
          </div>
          <div className='grid grid-cols-[60px_auto]'>
          <label className='self-center'>Status</label>
          <select onChange={(e)=>onValueChange(e)} className='input-select-style'>
              <option>Open</option>
              <option>Pending</option>
              <option>Closed</option>
            </select>
          </div>
          <div className='grid grid-cols-[60px_auto]'>
          <label className='self-center'>Bug type</label>
          <select onChange={(e)=>onValueChange(e)} className='input-select-style'>
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