import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import router from "./router";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { ThemeProvider } from "@/context/ThemeChangerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
