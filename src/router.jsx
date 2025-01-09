import { createBrowserRouter, Navigate } from "react-router-dom";

import Admin from "@/layouts/Admin";
import OpenRoutes from "@/layouts/OpenRoutes";
import { ProtectedRoute, AuthRedirect } from "@/components";

import {
  Login,
  About,
  Blogs,
  Events,
  Users,
  Venues,
  Tickets,
  Reports,
  Landing,
  Artists,
  NotFound,
  Checkout,
  Partners,
  Settings,
  MyEvents,
  EditBlog,
  EditEvent,
  EditVenue,
  ContactUs,
  UserGuide,
  EditArtist,
  AdminBlogs,
  HelpCenter,
  MyWishlist,
  TeamMembers,
  BlogDetails,
  CreateVenue,
  CreateBlogs,
  CreateEvent,
  ChangePhoto,
  VenueDetails,
  ClientVenues,
  CreateArtist,
  Transactions,
  EventDetails,
  ClientTickets,
  ArtistDetails,
  ArtistProfile,
  Notifications,
  EditTeamMember,
  UpdateProfile,
  PrivacyPolicy,
  SalesDashboard,
  ChangePassword,
  QRCodeScannerUI,
  SuccessPurchase,
  TermsConditions,
  CreateCategories,
  CreateTeamMembers,
  NairobiCinemaSeatingPlan,
  CreateNairobiCinemaSeatMap,
  NairobiCinemaSeatMapProgress,
  Dashboard as ClientDashboard,
} from "@/views";

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
        element: <AuthRedirect element={<Login />} />,
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
      {
        path: "/site-venues",
        element: <ClientVenues />,
      },
      {
        path: "/artists/:id",
        element: <ArtistDetails />,
      },
      {
        path: "/site-venues/:id",
        element: <VenueDetails />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/create-nairobi-cinema-seat-map/booking/:id",
        element: <NairobiCinemaSeatingPlan />,
      },
      {
        path: "/theatre-qr-scanner",
        element: <QRCodeScannerUI />,
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
        // element: <ClientDashboard />,
        element: <ProtectedRoute element={<ClientDashboard />} />,
      },
      {
        path: "/change-profile-photo",
        element: <ProtectedRoute element={<ChangePhoto />} />,
      },
      {
        path: "/notifications",
        element: <ProtectedRoute element={<Notifications />} />,
      },
      {
        path: "/update-profile",
        element: <ProtectedRoute element={<UpdateProfile />} />,
      },
      {
        path: "/change-password",
        element: <ProtectedRoute element={<ChangePassword />} />,
      },
      {
        path: "/my-events",
        element: <ProtectedRoute element={<MyEvents />} />,
      },
      {
        path: "/my-artist-profile",
        element: <ProtectedRoute element={<ArtistProfile />} />,
      },
      {
        path: "/my-wishlist",
        element: <ProtectedRoute element={<MyWishlist />} />,
      },
      {
        path: "/create-event",
        element: <ProtectedRoute element={<CreateEvent />} />,
      },
      {
        path: "/auth-blogs",
        element: <ProtectedRoute element={<AdminBlogs />} />,
      },
      {
        path: "/sales-dashboard",
        element: <ProtectedRoute element={<SalesDashboard />} />,
      },
      {
        path: "/tickets",
        element: <ProtectedRoute element={<Tickets />} />,
      },
      {
        path: "/users",
        element: <ProtectedRoute element={<Users />} />,
      },
      {
        path: "/venues",
        element: <ProtectedRoute element={<Venues />} />,
      },
      {
        path: "/reports",
        element: <ProtectedRoute element={<Reports />} />,
      },
      {
        path: "/create-blog",
        element: <ProtectedRoute element={<CreateBlogs />} />,
      },
      {
        path: "/settings",
        element: <ProtectedRoute element={<Settings />} />,
      },
      {
        path: "/blogs/edit-blog/:id",
        element: <ProtectedRoute element={<EditBlog />} />,
      },
      {
        path: "/transactions",
        element: <ProtectedRoute element={<Transactions />} />,
      },
      {
        path: "/venues/edit-venue/:id",
        element: <ProtectedRoute element={<EditVenue />} />,
      },
      {
        path: "/venues/create-venue",
        element: <ProtectedRoute element={<CreateVenue />} />,
      },
      {
        path: "/artists/create-artist",
        element: <ProtectedRoute element={<CreateArtist />} />,
      },
      {
        path: "/artists/edit-artist/:artistId",
        element: <ProtectedRoute element={<EditArtist />} />,
      },
      {
        path: "/my-tickets",
        element: <ProtectedRoute element={<ClientTickets />} />,
      },
      {
        path: "/create-nairobi-cinema-seat-map/pricing/:id",
        element: <ProtectedRoute element={<CreateNairobiCinemaSeatMap />} />,
      },
      {
        path: "/create-nairobi-cinema-seat-map/progress/:id",
        element: <ProtectedRoute element={<NairobiCinemaSeatMapProgress />} />,
      },
      {
        path: "/categories-create",
        element: <ProtectedRoute element={<CreateCategories />} />,
      },
      {
        path: "/my-events/edit-event/:id",
        element: <ProtectedRoute element={<EditEvent />} />,
      },
      {
        path: "/team-members",
        element: <ProtectedRoute element={<TeamMembers />} />,
      },
      {
        path: "/create-team-member",
        element: <ProtectedRoute element={<CreateTeamMembers />} />,
      },
      {
        path: "/edit-team-member/:id",
        element: <ProtectedRoute element={<EditTeamMember />} />,
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
