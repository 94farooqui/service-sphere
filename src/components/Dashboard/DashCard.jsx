import React from 'react'

const DashCard = ({tile}) => {
    //console.log(tile.fromColor)
  return (
    <div className={`min-w-30rem bg-white border rounded-lg p-8 1 shadow-md shadow-slate-300`}>
        <div className='flex flex-col items-center gap-2 text-slate-600'>
            <h4 className='font-semibold text-center text-lg '>{tile.label}</h4>
            <p>{tile.value}</p>
        </div>
    </div>
  )
}

export default DashCard