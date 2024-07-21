import React from "react";
import { Outlet } from "react-router-dom";
import { BlogFormProvider } from "@/context/CreateBlogFromContext";
import { VenueFormProvider } from "@/context/CreateVenueFormContext";
import { ArtistFormProvider } from "@/context/CreateArtistFormContext";
import { NairobiCinemaFormProvider } from "@/context/NairobiCinemaFormContext";

const Admin = () => {
  return (
    <div className="">
      <NairobiCinemaFormProvider>
        <BlogFormProvider>
          <VenueFormProvider>
            <ArtistFormProvider>
              <Outlet />
            </ArtistFormProvider>
          </VenueFormProvider>
        </BlogFormProvider>
      </NairobiCinemaFormProvider>
    </div>
  );
};

export default Admin;
