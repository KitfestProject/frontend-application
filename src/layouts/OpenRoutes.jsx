import React from "react";
import { Outlet } from "react-router-dom";
import { UserRegisterFormProvider } from "@/context/UserRegisterFormContext";
import { EventProvider } from "@/context/EventDetailsContext";
import { SearchProvider } from "@/context/SearchContext";
import { SeatMapProvider } from "@/context/SeatMapContext";

const OpenRoutes = () => {
  return (
    <UserRegisterFormProvider>
      <SeatMapProvider>
        <EventProvider>
          <SearchProvider>
            <Outlet />
          </SearchProvider>
        </EventProvider>
      </SeatMapProvider>
    </UserRegisterFormProvider>
  );
};

export default OpenRoutes;
