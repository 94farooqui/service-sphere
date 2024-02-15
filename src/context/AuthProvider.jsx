import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

const serverUrl = 'http://localhost:9000';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
  });

  useEffect(()=>{
    
  },[])
    
  // const login = async (credentials) => {
    
  // };

  const login = async (user) => {
    console.log(user)
    const response = await axios.post(`${serverUrl}/auth/login`, user)
    console.log(response)
    if(response.status == 200){
      console.log("Received token",  response.data.token)
      verifyToken(response.data.token)
        localStorage.setItem("jwtToken", response.data.token)
        return true
    }
    return false
}

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setAuth({
      isLoggedIn: false,
      user: null,
    })
  };

  const verifyToken = async (mytoken='jwtToken') => {
    //console.log(token)
    const token = localStorage.getItem(mytoken);
    const res = await axios.post(`${serverUrl}/auth/verifyToken`,{token})
    if(res.status == 200){
        //console.log(res)
        setAuth({ isLoggedIn: true, user: res.data.email })
    }
}

//   // Add other functions as needed (e.g., checking roles, refreshing token)

  return (
    <AuthContext.Provider value={{auth, login, logout,verifyToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };