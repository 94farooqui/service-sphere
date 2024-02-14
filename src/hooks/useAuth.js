import React, { useContext, useEffect, useState } from 'react'
import { verifyToken } from '../helpers/authHelper';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const useAuth = () => {

  const {auth} = useContext(AuthContext)
  if(auth === undefined)
  throw new Error("Must be logged in")

  return auth;
}

export default useAuth;
