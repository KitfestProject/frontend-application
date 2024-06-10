import React from "react";
import { Outlet } from "react-router-dom";
import { UserRegisterFormProvider } from "@/context/UserRegisterFormContext";
import { EventProvider } from "@/context/EventDetailsContext";
import { SearchProvider } from "@/context/SearchContext";

const OpenRoutes = () => {
  return (
    <UserRegisterFormProvider>
      <EventProvider>
        <SearchProvider>
          <Outlet />
        </SearchProvider>
      </EventProvider>
    </UserRegisterFormProvider>
  );
};

export default OpenRoutes;
