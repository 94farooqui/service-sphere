import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { verifyToken } from '../helpers/authHelper';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
  });

  useEffect( () => {
    const localToken = localStorage.getItem('jwtToken');
    if (localToken) {
      try {
        
        const decodedToken =  verifyToken(localToken) 
        if (decodedToken) { // Implement token validity check based on expiration, etc.
          setAuth({ isLoggedIn: true, user: decodedToken.email });
        } else {
          clearToken(); // Remove invalid token from localStorage
        }
      } catch (error) {
        console.error('Error parsing or validating JWT:', error);
      }
    }
  }, []);

  const login = async (credentials) => {
    // Handle login logic and store token on success
  };

//   const logout = () => {
//     clearToken(); // Remove token from localStorage
//     setAuth({ isLoggedIn: false, user: null });
//   };

//   // Add other functions as needed (e.g., checking roles, refreshing token)

  return (
    <AuthContext.Provider value={{ ...auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };