import { useCallback, useContext, useEffect, useState } from "react";
import {
  DynamicHelmet,
  SeatMapTitleDetails,
  SelectedSeatsDrawer,
  UpstairsSeatsComponent,
  DownstairsSeatsComponent,
} from "@/components/";
import { useLocation } from "react-router-dom";
import { useSeatStore } from "@/store/UseSeatStore";
import { SeatMapContext } from "@/context/SeatMapContext";
import { EventContext } from "@/context/EventDetailsContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const NairobiCinemaSeatMapProgress = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { setEventId } = useSeatStore();
  const { setEventSeatMap, getEventSeatMapData } = useContext(SeatMapContext);
  const { setEventDetails, setEventDetailsLoading } = useContext(EventContext);
  const { getSingleEvent } = useServerSideQueries();

  const eventId = location.pathname.split("/").pop();

  useEffect(() => {
    if (!eventId) return; // Ensure eventId is defined

    // Set event Id in the store
    setEventId(eventId);

    const getEventSeatMapDetails = async () => {
      try {
        await getEventSeatMapData(eventId);
      } catch (error) {
        console.error("Error fetching seat map data:", error);
      }
    };

    getEventSeatMapDetails();
  }, [eventId]);

  useEffect(() => {
    if (!eventId) return; // Ensure eventId is defined

    const getSingleEventsData = async () => {
      setEventDetailsLoading(true); // Set loading to true
      try {
        const response = await getSingleEvent(eventId);
        const { success, data } = response;

        if (success) {
          setEventDetails(data);
        } else {
          console.error("Error loading event details.");
        }
      } catch (error) {
        console.error("Error loading event details:", error);
      } finally {
        setEventDetailsLoading(false);
      }
    };

    getSingleEventsData();
  }, [eventId]);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  return (
    <>
      <DynamicHelmet
        title="KITFT - The Nairobi Cinema Seating Plan Progress"
        description="The Nairobi Cinema Seating Plan Progress. View the seat booking progress"
      />

      <div className="dark:bg-darkGray h-full min-w-screen">
        <div className="fixed-width-container bg-white dark:bg-darkGray pb-20">
          {/* Event Date */}
          <SeatMapTitleDetails />

          {/* Downstairs Seats Section */}
          <DownstairsSeatsComponent />

          {/* Upstairs Seats Section */}
          <UpstairsSeatsComponent />
        </div>
      </div>

      {/* Handle Drawer Open */}
      <SelectedSeatsDrawer isOpen={drawerOpen} onClose={toggleDrawerOpen} />
    </>
  );
};

export default NairobiCinemaSeatMapProgress;
