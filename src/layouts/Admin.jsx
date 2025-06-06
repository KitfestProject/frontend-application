import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { BlogFormProvider } from "@/context/CreateBlogFromContext";
import { VenueFormProvider } from "@/context/CreateVenueFormContext";
import { ArtistFormProvider } from "@/context/CreateArtistFormContext";
import { UserAccountProvider } from "@/context/UserAccountContext";
import { EventFormProvider } from "@/context/CreateEventFormContext";
import { TeamMemberFormProvider } from "@/context/CreateTeamMemberContext";

const Admin = () => {
  return (
    <div className="">
      <EventFormProvider>
        <BlogFormProvider>
          <VenueFormProvider>
            <ArtistFormProvider>
              <UserAccountProvider>
                <TeamMemberFormProvider>
                  <Outlet />
                </TeamMemberFormProvider>
              </UserAccountProvider>
            </ArtistFormProvider>
          </VenueFormProvider>
        </BlogFormProvider>
      </EventFormProvider>

      {/* Toast Alert Notifications */}
      <Toaster />
    </div>
  );
};

export default Admin;
