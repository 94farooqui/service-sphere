import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import useAuth from '../hooks/useAuth'
import { verifyToken } from '../helpers/authHelper'

const ProtectedRoute = ({children}) => {

  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(()=>{
    if(!auth.isLoggedIn){
      console.log(auth)
      navigate('/login')
    }
  },[auth,navigate])
  
    console.log(auth)

    return children
}

export default ProtectedRoute