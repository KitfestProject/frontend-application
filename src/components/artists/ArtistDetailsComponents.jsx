import {
  SimilarArtists,
  ArtistPastEvents,
  UserProfileSection,
  ArtistUpcomingEvents,
  ArtistPageDescription,
} from "@/components";

const ArtistDetailsComponents = () => {
  return (
    <div className="container my-10">
      {/* Page Description */}
      <ArtistPageDescription />

      {/* Artist profile image */}
      <div className="flex flex-col md:flex-row mb-10">
        {/* User Profile Details */}
        <UserProfileSection />

        {/* Events Section */}
        <div className="w-full md:w-[50%] flex flex-col gap-5">
          {/* Upcoming Events Component */}
          <ArtistUpcomingEvents />

          {/* Past Events Component */}
          <ArtistPastEvents />
        </div>
      </div>

      {/* Similar Artists */}
      {/* <SimilarArtists /> */}
    </div>
  );
};

export default ArtistDetailsComponents;
