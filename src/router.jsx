import { createBrowserRouter, Navigate } from "react-router-dom";

import Admin from "./layouts/Admin";
import OpenRoutes from "./layouts/OpenRoutes";

import {
  Login,
  About,
  Events,
  Landing,
  Artists,
  Partners,
  ContactUs,
  UserGuide,
  HelpCenter,
  EventDetails,
  PrivacyPolicy,
  TermsConditions,
} from "./views/frontend";
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
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:slug",
        element: <EventDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/user-guide",
        element: <UserGuide />,
      },
      {
        path: "/help-center",
        element: <HelpCenter />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
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
