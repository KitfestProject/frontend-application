import React from "react";
import { Outlet } from "react-router-dom";
import { BlogFormProvider } from "@/context/CreateBlogFromContext";
import { VenueFormProvider } from "@/context/CreateVenueFormContext";

const Admin = () => {
  return (
    <div className="">
      <BlogFormProvider>
        <VenueFormProvider>
          <Outlet />
        </VenueFormProvider>
      </BlogFormProvider>
    </div>
  );
};

export default Admin;
