import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectDetails } from '../helpers/projectHelper'
import HeaderContext from '../context/HeaderContext'

const ProjectDetails = () => {
    const {headerText,setHeaderText} = useContext(HeaderContext)
    const [project,setProject] = useState()
    const {id} = useParams()
    console.log(id)

    const getProject = async (id) => {
        const data = await getProjectDetails(id)
        setProject(data)
        setHeaderText(data.name)
    }

    useEffect(()=>{
        getProject(id)
    },[id])
    if(!project) return null;

  return (
    <div className='p-9'>
        <div className='page-flex'>
            <div>
                <h2 className='section-head'>Description</h2>
                <p className='card'>{project.description}</p>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <h2 className='section-head'>Teams</h2>
                    <button className='button-small'>Add team</button>
                </div>
                
                <div className='card'>

                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectDetails