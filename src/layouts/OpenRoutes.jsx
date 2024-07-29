import React from "react";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "@/context/SearchContext";
import { CheckoutFormProvider } from "@/context/CheckoutFormContext";
import { UserRegisterFormProvider } from "@/context/UserRegisterFormContext";

const OpenRoutes = () => {
  return (
    <UserRegisterFormProvider>
      <SearchProvider>
        <CheckoutFormProvider>
          <Outlet />
        </CheckoutFormProvider>
      </SearchProvider>
    </UserRegisterFormProvider>
  );
};

export default OpenRoutes;
