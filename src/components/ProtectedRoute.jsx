import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const {auth} = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoggedIn === undefined) {
        navigate("/login");
    }
  }, []);

  //console.log(auth);

  return <Outlet/>;
};

export default ProtectedRoute;
