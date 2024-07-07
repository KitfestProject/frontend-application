import React from "react";
import { Outlet } from "react-router-dom";
import { BlogFormProvider } from "@/context/CreateBlogFromContext";
import { VenueFormProvider } from "@/context/CreateVenueFormContext";
import { ArtistFormProvider } from "@/context/CreateArtistFormContext";

const Admin = () => {
  return (
    <div className="">
      <BlogFormProvider>
        <VenueFormProvider>
          <ArtistFormProvider>
            <Outlet />
          </ArtistFormProvider>
        </VenueFormProvider>
      </BlogFormProvider>
    </div>
  );
};

export default Admin;
