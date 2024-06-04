import React from "react";
import { Outlet } from "react-router-dom";
import { UserRegisterFormProvider } from "../context/UserRegisterFormContext";

const OpenRoutes = () => {
  return (
    <UserRegisterFormProvider>
      <Outlet />
    </UserRegisterFormProvider>
  );
};

export default OpenRoutes;
