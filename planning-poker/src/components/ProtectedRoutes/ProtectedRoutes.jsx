import React, { useState, useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../App";
const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { setCurrentUser, currentUser } = useContext(LoggedInContext);
  const currentUserLocal = JSON.parse(localStorage.getItem("currentUser"));
  

  //if currentUser state is undefined but currentUser is locally stored then set currentUser state per local 
  if (!currentUser && currentUserLocal) setCurrentUser(currentUserLocal);


  const userId = currentUser?.id || currentUserLocal.id;


  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, []);
  return <Outlet />;
  //   if (userId == null) navigate("/login");
};
export default ProtectedRoutes;
