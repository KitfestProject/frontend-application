import { createBrowserRouter, Navigate } from "react-router-dom";

import Admin from "./layouts/Admin";
import OpenRoutes from "./layouts/OpenRoutes";
import { ProtectedRoute } from "./components";

import {
  Login,
  About,
  Blogs,
  Events,
  Landing,
  Artists,
  Checkout,
  Partners,
  MyEvents,
  ContactUs,
  UserGuide,
  AdminBlogs,
  HelpCenter,
  MyWishlist,
  EventTicket,
  CreateEvent,
  ChangePhoto,
  EventDetails,
  ArtistProfile,
  Notifications,
  UpdateProfile,
  PrivacyPolicy,
  SalesDashboard,
  ChangePassword,
  SuccessPurchase,
  TermsConditions,
  Dashboard as ClientDashboard,
} from "./views";

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
        path: "/events-ticket/:slug",
        element: <EventTicket />,
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
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success-purchase",
        element: <SuccessPurchase />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
        element: <ClientDashboard />,
        // element: <ProtectedRoute element={<ClientDashboard />} />,
      },
      {
        path: "/change-profile-photo",
        element: <ChangePhoto />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/my-events",
        element: <MyEvents />,
      },
      {
        path: "/my-artist-profile",
        element: <ArtistProfile />,
      },
      {
        path: "/my-wishlist",
        element: <MyWishlist />,
      },
      {
        path: "/create-event",
        element: <CreateEvent />,
      },
      {
        path: "/auth-blogs",
        element: <AdminBlogs />,
      },
      {
        path: "/sales-dashboard",
        element: <SalesDashboard />,
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
