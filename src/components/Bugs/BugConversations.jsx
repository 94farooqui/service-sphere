import React from 'react'

const BugConversations = ({comms}) => {
  return (
    <div className=' py-2 rounded-md'>
      <div className='flex flex-col gap-4'>
      {comms.map(com => (
        <div className='bg-white grid grid-cols-2 gap-1 p-4 rounded-lg shadow-sm'>
          <h4 className='font-semibold'>{com.user}</h4>
          <p className='text-sm text-slate-400 text-end'>{com.time.toLocaleString()}</p>
          <p className='col-span-2'>{com.msg}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default BugConversations