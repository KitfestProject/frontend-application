import React from "react";
import { Outlet } from "react-router-dom";
import { BlogFormProvider } from "@/context/CreateBlogFromContext";
import { VenueFormProvider } from "@/context/CreateVenueFormContext";
import { ArtistFormProvider } from "@/context/CreateArtistFormContext";
import { NairobiCinemaFormProvider } from "@/context/NairobiCinemaFormContext";
import { UserAccountProvider } from "@/context/UserAccountContext";
import { EventFormProvider } from "@/context/CreateEventFormContext";

const Admin = () => {
  return (
    <div className="">
      <NairobiCinemaFormProvider>
        <EventFormProvider>
          <BlogFormProvider>
            <VenueFormProvider>
              <ArtistFormProvider>
                <UserAccountProvider>
                  <Outlet />
                </UserAccountProvider>
              </ArtistFormProvider>
            </VenueFormProvider>
          </BlogFormProvider>
        </EventFormProvider>
      </NairobiCinemaFormProvider>
    </div>
  );
};

export default Admin;
