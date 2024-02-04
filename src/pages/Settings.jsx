import React from 'react'
import { projects } from '../../data'
import ProjectCard from '../components/ProjectCard'
import { NavLink } from 'react-router-dom'
import ProjectsList from '../components/ProjectsList'

const Settings = () => {
  return (
    <div className='p-8'>
        <div className='grid grid-cols-1'>
            <div>
                <div className='flex justify-between items-center'>   
                    <h2 className='section-head'>Projects</h2>
                    <NavLink to='/settings/projects/new'><span className='button-small'>+ Project</span></NavLink>
                </div>  
                
                <ProjectsList/>
            </div>
        </div>
    </div>
  )
}

export default Settings