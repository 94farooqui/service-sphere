import React from 'react'
import { useParams } from 'react-router-dom'
import {bugs} from './../../data'
import BugDetailsCard from '../components/BugDetailsCard';

const BugDetails = () => {
    const params = useParams();
    const id = parseInt(params.id)
    const bug = bugs.find(bug => bug._id === id)

    if(!bug) return null;

  return (
    <div className=''>
      <BugDetailsCard bug={bug} />
    </div>
  )
}

export default BugDetails