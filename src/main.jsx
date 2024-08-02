import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import router from "./router";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { ThemeProvider } from "@/context/ThemeChangerContext";
import { SeatMapProvider } from "@/context/SeatMapContext";
import { EventProvider } from "@/context/EventDetailsContext";
import { SearchProvider } from "@/context/SearchContext";
import { NairobiCinemaFormProvider } from "@/context/NairobiCinemaFormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <NairobiCinemaFormProvider>
          <SeatMapProvider>
            <EventProvider>
              <SearchProvider>
                <RouterProvider router={router}></RouterProvider>
              </SearchProvider>
            </EventProvider>
          </SeatMapProvider>
        </NairobiCinemaFormProvider>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
