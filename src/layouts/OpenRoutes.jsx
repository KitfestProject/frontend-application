import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Outlet, Navigate } from "react-router-dom";

const OpenRoutes = () => {
  const { token, user } = useStateContext();

  if (token) {
    return <Navigate to="/admin-dashboard" />;
  }

  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default OpenRoutes;
