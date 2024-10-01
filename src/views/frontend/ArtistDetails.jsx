import {
  Footer,
  Navigation,
  DynamicHelmet,
  ArtistDetailsComponents,
} from "@/components";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EventContext } from "@/context/EventDetailsContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const ArtistDetails = () => {
  const {
    artistDetails,
    setArtistDetails,
    setArtistPastEvents,
    setArtistUpcomingEvents,
    // setArtistPastEventsLoading,
    setArtistUpcomingEventsLoading,
  } = useContext(EventContext);
  const location = useLocation();
  const pathname = location.pathname;
  const { getSingleArtist, getSiteEvents } = useServerSideQueries();

  const artistId = pathname.split("/")[2];

  console.log(artistId);

  useEffect(() => {
    const fetchArtistDetails = async (artistId) => {
      const { success, message, data } = await getSingleArtist(artistId);

      if (!success) {
        console.log(message);
        return;
      }

      console.log(data);

      setArtistDetails(data);
    };

    fetchArtistDetails(artistId);
    fetchUpcomingAndPastEvents();
  }, [artistId]);

  const fetchUpcomingAndPastEvents = async () => {
    setArtistUpcomingEventsLoading(true);
    const { success, message, data } = await getSiteEvents(0, 10, true);

    if (!success) {
      setArtistUpcomingEventsLoading(false);
      console.log(message);
      return;
    }

    setArtistUpcomingEvents(data.upcoming);
    setArtistPastEvents(data.past);
    setArtistUpcomingEventsLoading(false);
  };

  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Artist Details page"
        description={`Edit ${artistDetails?.name} details.`}
      />

      {/* Navigation Section */}
      <Navigation />

      <ArtistDetailsComponents />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default ArtistDetails;
