import React from 'react'
import Logo from './../../public/logo.jpg'

const ProjectCard = ({project}) => {
  return (
    <div className='card-shadow'>
        <div className='flex text-slate-600'>
            <img width={120} height={80} src={Logo} />
            <div className='p-4 border-l'>
            <h2 className='section-head'>{project.name}</h2>
            <p className='text-sm line-clamp-3'>{project.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard