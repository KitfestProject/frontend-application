import React from "react";
import { Outlet } from "react-router-dom";
import { CheckoutFormProvider } from "@/context/CheckoutFormContext";
import { UserRegisterFormProvider } from "@/context/UserRegisterFormContext";

const OpenRoutes = () => {
  return (
    <UserRegisterFormProvider>
      <CheckoutFormProvider>
        <Outlet />
      </CheckoutFormProvider>
    </UserRegisterFormProvider>
  );
};

export default OpenRoutes;
