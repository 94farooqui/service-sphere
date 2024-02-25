import React from 'react'

const DashCard = ({tile,color}) => {
    //console.log(tile.fromColor)
  return (
    <div className={`min-w-30rem border rounded-lg  p-8 1 shadow-md shadow-slate-300`} style={{background:color}} >
        <div className='flex flex-col gap-2 text-white'>
            <h4 className='font-semibold text-lg '>{tile.label}</h4>
            <p className='font-bold text-4xl'>{tile.value}</p>
        </div>
    </div>
  )
}

export default DashCard