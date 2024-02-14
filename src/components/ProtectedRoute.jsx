import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { verifyToken } from "../helpers/authHelper";

const ProtectedRoute = ({ children }) => {
  const {auth} = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Auth ",auth)
    if (!auth.isLoggedIn) {
      console.log(auth);
      navigate("/login");
    }
  }, [auth, navigate]);

  console.log(auth);

  return <Outlet/>;
};

export default ProtectedRoute;
