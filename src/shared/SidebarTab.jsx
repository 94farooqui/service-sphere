import React from 'react'

const SidebarTab = ({key,iconUrl,label}) => {
    console.log(key, iconUrl, label)
  return (
    <div key={key} className='h-8 p-1 text-xl text-white flex gap-4 items-center'>
        <span><img src={iconUrl} /></span>
        <p>{label}</p>
    </div>
  )
}

export default SidebarTab