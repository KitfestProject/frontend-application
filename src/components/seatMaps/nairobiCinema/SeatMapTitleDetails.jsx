import { useContext } from "react";
import { FaCouch } from "react-icons/fa6";
import useTimeAgo from "@/hooks/useTimeAgo";
import { ThemeSwitcher } from "@/components";
import { useSeatStore } from "@/store/UseSeatStore";
import { EventContext } from "@/context/EventDetailsContext";
import { useLocation } from "react-router-dom";

const SeatMapTitleDetails = ({ toggleDrawer }) => {
  const { eventDetails } = useContext(EventContext);
  const { formatEventDate } = useTimeAgo();
  const { selectedSeats } = useSeatStore();

  const handleOpenDrawerOpen = () => {
    if (selectedSeats.length === 0) return;

    toggleDrawer();
  };

  const location = useLocation();
  const paths = location.pathname.split("/");
  const pagePath = paths[paths.length - 2];

  return (
    <>
      {!pagePath === "progress" && (
        <div className="border-b border-gray/30 dark:border-gray/30">
          <div className="bg-white dark:bg-darkGray text-darkGray dark:text-slate-100 text-center py-2 flex justify-center items-center gap-5">
            <h1 className="text-lg md:text-xl font-semibold">
              Event Date:{" "}
              {formatEventDate(eventDetails?.event_date?.start_date)}
            </h1>

            {/* Theme Changer */}
            <ThemeSwitcher />
          </div>
        </div>
      )}

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

      {pagePath === "booking" && (
        <div
          className="flex flex-col gap-10 justify-between items-center mb-3 fixed bottom-[20px] md:bottom-[50px] left-[10px] md:left-[30px] bg-transparent dark:bg-gray/50 p-3 rounded-md border border-gray/30 dark:border-gray"
          style={{ zIndex: 99 }}
        >
          {/* Seat Map */}
          <div className="">
            <div className="flex flex-col gap-5 justify-start items-center">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray rounded-t-3xl hover:bg-yellow-500 hover:scale-110 transition-all  cursor-pointer"></div>
                <span className="text-dark dark:text-slate-300 font-semibold">
                  Available
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-yellow-500 rounded-t-3xl"></div>
                <span className="text-dark dark:text-slate-300 font-semibold">
                  Selected
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-t-3xl"></div>
                <span className="text-dark dark:text-slate-300 font-semibold">
                  Booked
                </span>
              </div>
            </div>
          </div>

          {/* Seat Legend */}
          <button
            onClick={handleOpenDrawerOpen}
            className="w-[80px] h-[80px] rounded-full dark:bg-gray/30 flex justify-center items-center border border-gray/30 dark:bg-gray relative"
          >
            <FaCouch
              className={`text-5xl text-primary dark:text-slate-100 ${
                selectedSeats.length > 0 && "animate-bounce"
              } `}
            />
            {/* Counter badge */}
            <div className="absolute top-0 right-0 bg-secondary text-white w-8 h-8 rounded-full flex justify-center items-center">
              {selectedSeats.length}
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default SeatMapTitleDetails;
