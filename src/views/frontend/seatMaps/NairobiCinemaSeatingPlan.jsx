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
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const NairobiCinemaSeatingPlan = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { setEventId, clearSeatStore } = useSeatStore();
  const { setEventSeatMap, getEventSeatMapData, getPathId } =
    useContext(SeatMapContext);
  const location = useLocation();
  const { setEventDetails, setEventDetailsLoading } = useContext(EventContext);
  const { getSingleEvent } = useServerSideQueries();

  const eventId = getPathId(location.pathname);

  useEffect(() => {
    // Set event Id
    setEventId(eventId);

    const getEventSeatMapDetails = async (eventId) => {
      await getEventSeatMapData(eventId);
      return;
    };

    getEventSeatMapDetails(eventId);
  }, [eventId, setEventSeatMap]);

  useEffect(() => {
    const getSingleEventsData = async (eventId) => {
      setEventDetailsLoading(true); // Set loading to true
      const response = await getSingleEvent(eventId);

      const { success, data } = response;

      if (!success) {
        setEventDetailsLoading(false);
        console.log("Error loading event details. " + message);
      }

      if (success) {
        setEventDetailsLoading(false);
        setEventDetails(data);
      }
    };

    getSingleEventsData(eventId);
  }, [eventId, setEventDetails]);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleNavigateBack = () => {
    clearSeatStore();
    window.history.back();
  };

  return (
    <>
      <DynamicHelmet
        title="KITFT - The Nairobi Cinema Seating Plan"
        description="Select your preferred seat at the Nairobi Cinema and enjoy the best view of the screen. This is the Nairobi Cinema Seating Plan."
      />

      <div className="dark:bg-darkGray h-full min-w-screen relative">
        <div className="fixed-width-container bg-white dark:bg-darkGray pb-20">
          {/* Event Date */}
          <SeatMapTitleDetails />

          {/* Downstairs Seats Section */}
          <DownstairsSeatsComponent />

          {/* Upstairs Seats Section */}
          <UpstairsSeatsComponent />
        </div>

        {/* Back Button */}
        <div className="fixed top-10 left-10">
          <button
            onClick={handleNavigateBack}
            className="bg-primaryLight dark:bg-gray hover:bg-primaryDark text-white rounded-full p-3 shadow-md flex justify-center items-center gap-2 px-5"
          >
            <MdOutlineKeyboardBackspace className="text-xl" /> Back
          </button>
        </div>
      </div>

      {/* Handle Drawer Open */}
      <SelectedSeatsDrawer isOpen={drawerOpen} onClose={toggleDrawerOpen} />
    </>
  );
};

export default NairobiCinemaSeatingPlan;
