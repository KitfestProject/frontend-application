import React from "react";
import { Outlet } from "react-router-dom";

const OpenRoutes = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default OpenRoutes;
