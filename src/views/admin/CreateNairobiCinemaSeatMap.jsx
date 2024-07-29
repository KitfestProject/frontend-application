import {
  Loader,
  ThemeSwitcher,
  DynamicHelmet,
  SelectedSeatsDrawer,
  SeatMapEventDetailsDrawer,
  CreateUpstairsSeatsComponent,
  CreateDownstairsSeatsComponent,
} from "@/components/";
import { useCallback, useContext, useEffect, useState } from "react";
import { useSeatStore } from "@/store/UseSeatStore";
import { CreateNairobiCinemaContext } from "@/context/NairobiCinemaFormContext";
import { useEventStore } from "@/store/UseEventStore";
import { useLocation } from "react-router-dom";
import axiosClient from "@/axiosClient";
import toast, { Toaster } from "react-hot-toast";
import { BiSolidCheckCircle } from "react-icons/bi";
import useThemeStore from "@/store/UseThemeStore";

const CreateNairobiCinemaSeatMap = () => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { selectedSeats } = useSeatStore();
  const { setEventId } = useEventStore();
  const { getTheaterSectionData } = useContext(CreateNairobiCinemaContext);
  const location = useLocation();
  const eventId = location.pathname.split("/")[3];
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Set Event ID
  useEffect(() => {
    setEventId(eventId);
    getTheaterSectionData(eventId);
    if (selectedSeats.length === 0) {
      setDrawerOpen(false);
    }
  }, []);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleGetEventDetails = async () => {
    // Check if state has data
    if (eventData) {
      setDrawerOpen(true);
      return;
    }

    setLoading(true);

    const response = await axiosClient.get(`/events/${eventId}`);

    const { success, message, data } = response.data;

    console.log(data);

    if (!success) {
      toast.error(message, {
        icon: <BiSolidCheckCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
      setLoading(false);
      return;
    }

    toast.success(message, {
      icon: <BiSolidCheckCircle className="text-white text-2xl" />,
      style: {
        borderRadius: "10px",
        background: "#00c20b",
        color: "#fff",
      },
    });

    setLoading(false);
    setEventData(data);
    setDrawerOpen(true);
  };

  return (
    <>
      <DynamicHelmet
        title="KITFT - The Nairobi Cinema Seating Plan"
        description="Select your preferred seat at the Nairobi Cinema and enjoy the best view of the screen. This is the Nairobi Cinema Seating Plan."
      />

      <Toaster position="top-right" />

      <div className="bg-white dark:bg-darkGray min-h-screen w-screen">
        <div className="fixed-width-container dark:bg-darkGray pb-20 pt-5">
          {/* Event Date */}
          <div className="border-b border-gray/30 dark:border-gray/30 pb-3">
            <div className="bg-white dark:bg-darkGray text-white dark:text-slate-100 text-center py-2 flex justify-center items-center gap-5">
              <button
                onClick={handleGetEventDetails}
                className="px-8 py-2 rounded border border-gray bg-transparent text-gray text-lg"
              >
                {loading ? (
                  <Loader color={isDarkMode ? "#ffffff" : "#732e1c"} />
                ) : (
                  "View Event Details"
                )}
              </button>
              <div className="">
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          <div className="text-center pb-10 mt-5">
            <h1 className="text-xl md:text-3xl font-semibold md:font-bold tracking-tighter text-primary dark:text-slate-100">
              NAIROBI CINEMA SEAT SELECTION
            </h1>
          </div>

          <div className="flex justify-center items-center mb-10">
            <h1 className="text-4xl font-bold text-primary dark:text-darkGray text-center mb-5 uppercase bg-[#fcf4f3] px-[150px] shadow-md py-5 rounded-md">
              Stage
            </h1>
          </div>

          {/* Downstairs Seats Section */}
          <CreateDownstairsSeatsComponent />

          {/* Upstairs Seats Section */}
          <CreateUpstairsSeatsComponent />

          {/* Debugging */}
          {/* <div className="mt-10 text-xs text-gray">
            <pre>
              {JSON.stringify(
                nairobiCinemaFormData.downStairsLeftSection,
                null,
                2
              )}
            </pre>
          </div> */}
        </div>
      </div>

      {/* Handle Drawer Open */}
      <SeatMapEventDetailsDrawer
        isOpen={drawerOpen}
        onClose={toggleDrawerOpen}
        event={eventData}
      />
    </>
  );
};

export default CreateNairobiCinemaSeatMap;
