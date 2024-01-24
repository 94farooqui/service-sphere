import React, { useContext, useEffect } from 'react'
import HeaderContext from '../context/HeaderContext'
import { bugs } from '../../data'

const NewBug = () => {

    const {headerText,setHeaderText} = useContext(HeaderContext)

    useEffect(()=>{
        setHeaderText("New Bug")
    },[])
  return (
    <div className='p-8'>
        <div className='bg-white p-6 rounded-lg drop-shadow-md'>
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-slate-600'>Title</label>
                    <input className='bg-transparent border border-slate-300 rounded-md p-2' id='bug-title' name='name' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-slate-600'>Description</label>
                    <textarea className='bg-transparent border border-slate-300 rounded-md p-2 resize-none' rows={4} id='bug-title' name='description' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-slate-600'>Project</label>
                    <select className='bg-transparent border border-slate-300 rounded-md p-2' id='project' name='project'>
                        {bugs.map(bug =><option key={bug.project} value={bug.project}>{bug.project}</option>)}
                    </select>
                </div>
                <button className='bg-gray-900 text-white font-semibold self-end px-4 py-2 rounded-md'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default NewBug