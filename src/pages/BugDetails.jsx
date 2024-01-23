import React from 'react'
import { useParams } from 'react-router-dom'

const BugDetails = () => {
    const params = useParams();
    const id = params.id

  return (
    <div>Bug {id} Details</div>
  )
}

export default BugDetails