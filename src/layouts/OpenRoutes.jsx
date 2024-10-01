import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CheckoutFormProvider } from "@/context/CheckoutFormContext";
import { UserRegisterFormProvider } from "@/context/UserRegisterFormContext";

const OpenRoutes = () => {
  return (
    <>
      <UserRegisterFormProvider>
        <CheckoutFormProvider>
          <Outlet />
        </CheckoutFormProvider>
      </UserRegisterFormProvider>

      {/* Toast Alert Notifications */}
      <Toaster />
    </>
  );
};

export default OpenRoutes;
