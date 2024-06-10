import React from "react";
import { Outlet } from "react-router-dom";
import { UserRegisterFormProvider } from "@/context/UserRegisterFormContext";
import { EventProvider } from "@/context/EventProvider";

const OpenRoutes = () => {
  return (
    <UserRegisterFormProvider>
      <EventProvider>
        <Outlet />
      </EventProvider>
    </UserRegisterFormProvider>
  );
};

export default OpenRoutes;
