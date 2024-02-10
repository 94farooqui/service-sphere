import React from 'react'

const BugAuthor = () => {
  return (
    <div className='card bg-white p-4 rounded-md border'>
      
      <div className='flex flex-col gap-2'>
        <p>Author Info</p>
        <div className='flex gap-2 items-center'>
          <div className='w-8 h-8 bg-slate-400 rounded-full'></div>
          <div className='flex flex-col text-sm'>
            <p className='text-sm font-semibold'>Mubasshir Farooqui</p>
            <p className='text-xs text-slate-600'>Software Engineer</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BugAuthor