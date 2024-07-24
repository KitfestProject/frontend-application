import React from "react";
import { Outlet } from "react-router-dom";
import { UserRegisterFormProvider } from "@/context/UserRegisterFormContext";
import { EventProvider } from "@/context/EventDetailsContext";
import { SearchProvider } from "@/context/SearchContext";
import { SeatMapProvider } from "@/context/SeatMapContext";
import { CheckoutFormProvider } from "@/context/CheckoutFormContext";

const OpenRoutes = () => {
  return (
    <UserRegisterFormProvider>
      <SeatMapProvider>
        <EventProvider>
          <SearchProvider>
            <CheckoutFormProvider>
              <Outlet />
            </CheckoutFormProvider>
          </SearchProvider>
        </EventProvider>
      </SeatMapProvider>
    </UserRegisterFormProvider>
  );
};

export default OpenRoutes;
