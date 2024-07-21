import {
  ThemeSwitcher,
  DynamicHelmet,
  SelectedSeatsDrawer,
  DownstairsSeatsComponent,
  UpstairsSeatsComponent,
  CreateUpstairsSeatsComponent,
  CreateDownstairsSeatsComponent,
} from "@/components/";
import { useCallback, useContext, useState } from "react";
import { FaCouch } from "react-icons/fa6";
import { useSeatStore } from "@/store/UseSeatStore";
import { CreateNairobiCinemaContext } from "@/context/NairobiCinemaFormContext";

const CreateNairobiCinemaSeatMap = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { selectedSeats } = useSeatStore();
  const { nairobiCinemaFormData } = useContext(CreateNairobiCinemaContext);

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
          <div className="bg-darkGray dark:bg-darkGray text-white dark:text-slate-100 text-center py-2 flex justify-center items-center gap-5">
            <button className="px-8 py-2 rounded border border-gray bg-transparent text-gray text-lg">
              View Event Details
            </button>
            <div className="">
              <ThemeSwitcher />
            </div>
          </div>
        </div>

        <div className="md:container md:mx-auto dark:bg-darkGray pb-20 pt-5">
          <div className="text-center pb-10">
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
      <SelectedSeatsDrawer isOpen={drawerOpen} onClose={toggleDrawerOpen} />
    </>
  );
};

export default CreateNairobiCinemaSeatMap;
