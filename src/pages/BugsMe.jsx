import React, { useContext, useEffect } from 'react'
import HeaderContext from '../context/HeaderContext'

const BugsMe = () => {
    const {headerText,setHeaderText} = useContext(HeaderContext)

    useEffect(()=>{
        setHeaderText("Assigned to me")
    },[])
  return (
    <div>BugsMe</div>
  )
}

export default BugsMe