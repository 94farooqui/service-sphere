import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectDetails } from '../helpers/projectHelper'

const ProjectDetails = () => {
    const [project,setProject] = useState()
    const {id} = useParams()
    console.log(id)

    const getProject = async (id) => {
        const data = await getProjectDetails(id)
        setProject(data)
    }

    useEffect(()=>{
        getProject(id)
    },[id])
    if(!project) return null;

  return (
    <div>
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </div>
    </div>
  )
}

export default ProjectDetails