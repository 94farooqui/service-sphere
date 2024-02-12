import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    const {auth} = useContext(AuthContext)
    console.log(auth)
    
    useEffect(()=>{
        if(!auth) {
            window.alert("You need to login to access the settings")
            navigate('/login',{ replace: true })}
    },[])

  return children
}

export default ProtectedRoute