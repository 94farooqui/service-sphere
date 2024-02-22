import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { getAllProjects } from '../../helpers/projectHelper'
import {bugTypes,priority,statusValues} from './../../../data'

const BugPropertiesCard = ({bug,bugDetails,setBug}) => {

  const {data:projects, isLoading,error} = useQuery({queryKey:["project"], queryFn: getAllProjects })


  const onValueChange = (e) => {
    setBug({...bugDetails, [e.target.name]:e.target.value})
    console.log("Bug Details",bugDetails)
  } 

  useEffect(()=>{
    setBug({...bug})
    //console.log("Bug in properties")
  },[])

  return (
    <div className='card bg-white p-2 rounded-md border'>
      <div>
        <p className='text-sm font-semibold te text-slate-500'>Properties</p>
        <form className='mt-4 text-sm flex flex-col gap-2'>
          <div className='grid grid-cols-[60px_auto]'>
          <label className='self-center'>Project</label>
            <select onChange={(e)=>onValueChange(e)} name="project" defaultValue={bug.project} className='input-select-style'>
              {projects && projects.map(project => <option key={project._id} value={project._id}>{project.name}</option>)}
            </select>
          </div>
          <div className='grid grid-cols-[60px_auto]'>
          <label className='self-center'>Priority</label>
          <select onChange={(e)=>onValueChange(e)} name="priority" defaultValue={bug.priority} className='input-select-style'>
            {priority.map(p => <option key={p.label} value={p.label}>{p.label}</option>)}
            </select>
          </div>
          <div className='grid grid-cols-[60px_auto]'>
          <label className='self-center'>Status</label>
          <select onChange={(e)=>onValueChange(e)} name="status" defaultValue={bug.status} className='input-select-style'>
            {statusValues.map(status => <option key={status.label} value={status.label}>{status.label}</option>)}
              
            </select>
          </div>
          <div className='grid grid-cols-[60px_auto]'>
          <label className='self-center'>Bug type</label>
          <select onChange={(e)=>onValueChange(e)} name="type" defaultValue={bug.type} className='input-select-style'>
            {bugTypes.map(type => <option key={type.label} value={type.label}>{type.label}</option> )}
      
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BugPropertiesCard