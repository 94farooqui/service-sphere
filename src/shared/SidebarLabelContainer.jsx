import React from 'react'

const SidebarLabelContainer = ({children}) => {
  return (
    <div className='h-8 w-[160px] p-1 text-xl text-white flex justify-start items-center'>
        {children}
    </div>
  )
}

export default SidebarLabelContainer