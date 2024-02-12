import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllUsers } from '../helpers/userHelper'

const AddAssigneBox = () => {
    const {data:users,isLoading, error} = useQuery({queryKey:['users'], queryFn:getAllUsers})

    if(isLoading) return <p>Loading...</p>

    if(error) return <p>Error</p>
  return (
    <div className=' w-full h-[280px] border border-slate-200 rounded-md bg-slate-100 '>
        <div className='p-2 flex flex-col gap-2'>
            <h2 className='text-xs font-bold'>Add User</h2>
            <input placeholder='Search' className='bg-white border border-slate-200 rounded-md p-1 text-xs focus:outline-none focus:ring-1' />
            <div className='bg-slate-100 overflow-y-scroll no-scrollbar'>
                {users.map(user => <div key={user._id} className='group flex justify-between text-sm border-b border-slate-200 p-1'>
                    <p>{user.firstname +" " + user.lastname}</p>
                    <button className='hidden group-hover:block'>Add</button>
                    </div>)}
            </div>
        </div>
    </div>
  )
}

export default AddAssigneBox