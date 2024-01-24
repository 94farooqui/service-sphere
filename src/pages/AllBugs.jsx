import React from 'react'
import {bugs} from './../../data'
import BugSmallCard from '../components/BugSmallCard'

const AllBugs = () => {
  return (
    <div className=' p-2  grid grid-cols-1 gap-2'>
        {bugs.map(bug => <BugSmallCard _id={bug._id} bug_id={bug.bug_id} name={bug.name} dateCreated={bug.dateCreated} status={bug.status} />)}
    </div>
  )
}

export default AllBugs