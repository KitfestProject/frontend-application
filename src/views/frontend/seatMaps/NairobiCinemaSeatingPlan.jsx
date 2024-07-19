import {
  DynamicHelmet,
  SelectedSeatsDrawer,
  DownstairsSeatsComponent,
  UpstairsSeatsComponent,
} from "@/components/";
import { useCallback, useState } from "react";
import { FaCouch } from "react-icons/fa6";
import { useSeatStore } from "@/store/UseSeatStore";

const NairobiCinemaSeatingPlan = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { selectedSeats } = useSeatStore();

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleOpenDrawerOpen = () => {
    if (selectedSeats.length === 0) return;

    setDrawerOpen(true);
  };

  return (
    <>
      <DynamicHelmet
        title="KITFT - The Nairobi Cinema Seating Plan"
        description="Select your preferred seat at the Nairobi Cinema and enjoy the best view of the screen. This is the Nairobi Cinema Seating Plan."
      />

      <div className="bg-white dark:bg-darkGray min-h-screen w-screen">
        {/* Event Date */}
        <div className="dark:border-b dark:border-gray/30">
          <div className="bg-primary dark:bg-darkGray text-white dark:text-slate-100 text-center py-2">
            <h1 className="text-lg md:text-xl font-semibold">
              Event Date: 20th October 2021
            </h1>
          </div>
        </div>

        <div className="md:container md:mx-auto dark:bg-darkGray pb-20 pt-5">
          <div className="text-center py-10">
            <h1 className="text-xl md:text-3xl font-semibold md:font-bold tracking-tighter text-primary dark:text-slate-100">
              NAIROBI CINEMA SEAT SELECTION
            </h1>
          </div>

          <div className="flex justify-center items-center mb-10">
            <h1 className="text-4xl font-bold text-primary dark:text-darkGray text-center mb-5 uppercase bg-[#fcf4f3] px-[150px] shadow-md py-5 rounded-md">
              Stage
            </h1>
          </div>

          <div className="flex flex-col gap-10 justify-between items-center mb-3 fixed bottom-[50px] left-[30px]">
            {/* Seat Map */}
            <div className="">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 md:w-5 md:h-5 bg-gray rounded-t-3xl hover:bg-yellow-500 hover:scale-110 transition-all  cursor-pointer"></div>
                  <span className="text-dark dark:text-slate-300 font-semibold">
                    Available
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 md:w-5 md:h-5 bg-yellow-500 rounded-t-3xl"></div>
                  <span className="text-dark dark:text-slate-300 font-semibold">
                    Selected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 md:w-5 md:h-5 bg-green-500 rounded-t-3xl"></div>
                  <span className="text-dark dark:text-slate-300 font-semibold">
                    Booked
                  </span>
                </div>
              </div>
            </div>

            {/* Seat Legend */}
            <button
              onClick={handleOpenDrawerOpen}
              className="w-[100px] h-[100px] rounded-full bg-gray/30 flex justify-center items-center border border-gray relative"
            >
              <FaCouch
                className={`text-5xl text-primary dark:text-gray ${
                  selectedSeats.length > 0 && "animate-bounce"
                } `}
              />
              {/* Counter badge */}
              <div className="absolute top-0 right-0 bg-secondary text-white w-8 h-8 rounded-full flex justify-center items-center">
                {selectedSeats.length}
              </div>
            </button>
          </div>

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

export default NairobiCinemaSeatingPlan;
