import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const {id} = useParams()
  return (
    <div><h1>{id}</h1></div>
  )
}

export default Profile