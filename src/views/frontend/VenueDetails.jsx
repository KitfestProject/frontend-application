import {
  Footer,
  Navigation,
  DynamicHelmet,
  VenueDetailsComponents,
} from "@/components";
import { useContext, useEffect } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { StateContext } from "@/context/ContextProvider";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// venueDetails, setVenueDetails
const VenueDetails = () => {
  const { venueDetails, setVenueDetails, setEventData, setStateLoading } =
    useContext(StateContext);
  const { getSingleVenue, getUpcomingEvents } = useServerSideQueries();
  const location = useLocation();

  const venueId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchSingleVenue = async (venueId) => {
      setStateLoading(true);
      const { success, message, data } = await getSingleVenue(venueId);

      if (!success) {
        setStateLoading(false);
        return toast.error(message);
      }

      console.log(message);
      setVenueDetails(data);
      setStateLoading(false);
    };

    fetchSingleVenue(venueId);
  }, []);

  useEffect(() => {
    // Fetch upcoming events
    const fetchUpcomingEvents = async () => {
      setStateLoading(true);
      const { success, message, data } = await getUpcomingEvents();

      if (!success) {
        setStateLoading(false);
        return toast.error(message);
      }

      console.log(message);
      setEventData(data);
      setStateLoading(false);
    };

    fetchUpcomingEvents();
  }, []);

  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title={`KITFT - ${venueDetails?.name}`}
        description={`Learn more about ${venueDetails?.name}`}
        keywords={"KITFT - Events, Event Venues, Kenyan Theater"}
        seoImage={venueDetails?.image}
        seoTitle={venueDetails?.name}
        seoDescription={venueDetails?.description}
      />

      {/* Navigation Section */}
      <Navigation />

      <VenueDetailsComponents />

      {/* Site Footer */}
      <Footer />

      {/* Notification Toast */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default VenueDetails;
