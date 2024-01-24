import React, { useContext, useEffect } from 'react'
import HeaderContext from '../context/HeaderContext'

const Archive = () => {
  const {headerText,setHeaderText} = useContext(HeaderContext)

    useEffect(()=>{
        setHeaderText("Archive")
    },[])
  return (
    <div>Arhive</div>
  )
}

export default Archive