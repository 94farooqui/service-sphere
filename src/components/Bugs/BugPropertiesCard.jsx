import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProjects } from '../../helpers/projectHelper'

const BugPropertiesCard = ({bug,setBug}) => {
  console.log(bug)
  const {data:projects, isLoading,error} = useQuery({queryKey:["project"], queryFn: getAllProjects })
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
            <select onChange={(e)=>onValueChange(e)} defaultValue={bug.project} className='input-select-style'>
              {projects && projects.map(project => <option value={project._id}>{project.name}</option>)}
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