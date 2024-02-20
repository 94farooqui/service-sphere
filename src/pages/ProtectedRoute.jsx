import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const auth = useSelector((state) => (state.auth))

    return auth.isLoading ? <div><h2>Loading...</h2></div> : auth.isAuthenticated ? <Outlet/> : <Navigate to='/login' />
}

export default ProtectedRoute