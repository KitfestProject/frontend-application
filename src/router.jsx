import { createBrowserRouter, Navigate } from "react-router-dom";

import Admin from "./layouts/Admin";
import OpenRoutes from "./layouts/OpenRoutes";

import { Login, Landing } from "./views/frontend";
import { Dashboard as AdminDashboard } from "./views/admin";
import { Dashboard as ClientDashboard } from "./views/client";
import { Dashboard as OrganizerDashboard } from "./views/organizer";

import NotFound from "./views/NotFound";

const router = createBrowserRouter([
  {
    // OPEN ROUTES
    path: "/",
    element: <OpenRoutes />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/auth-login",
        element: <Login />,
      },
    ],
  },
  {
    // CLIENT ROUTES
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/user-dashboard",
        element: <ClientDashboard to="/user-dashboard" />,
      },
    ],
  },
  {
    // ADMIN ROUTES
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/admin-dashboard",
        element: <AdminDashboard to="/admin-dashboard" />,
      },
    ],
  },
  {
    // ORGANIZERS ROUTES
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/organizer-dashboard",
        element: <OrganizerDashboard to="/organizer-dashboard" />,
      },
    ],
  },
  {
    // Link to the 404 page
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
