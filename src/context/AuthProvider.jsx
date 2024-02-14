import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { verifyToken } from '../helpers/authHelper';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
  });

  useEffect(()=>{
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        console.log("trying to fetch")
        fetch('http://localhost:9000/auth/verifyToken',{
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify({token})
        }).then(response => response.json())
        .then(data => {
          console.log("After fetching token: ", data)
          if(data.email){
            setAuth({ isLoggedIn: true, user: data.email })
          }
          else {
            clearToken(); // Remove invalid token from localStorage
          }
        })
      } catch (error) {
        console.error('Error parsing or validating JWT:', error);
      }
    }
    
  },[])
    
  const login = async (credentials) => {
    
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
  };

//   // Add other functions as needed (e.g., checking roles, refreshing token)

  return (
    <AuthContext.Provider value={{auth, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };