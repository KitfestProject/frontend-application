import {
  DynamicHelmet,
  DownstairsSeatsComponent,
  UpstairsSeatsComponent,
} from "@/components/";

const NairobiCinemaSeatingPlan = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - The Nairobi Cinema Seating Plan"
        description="Select your preferred seat at the Nairobi Cinema and enjoy the best view of the screen. This is the Nairobi Cinema Seating Plan."
      />

      <div className="dark:bg-darkGray min-h-screen w-full">
        <div className="container mx-auto bg-white dark:bg-darkGray pb-20 pt-5">
          <div className="text-center py-4">
            <h1 className="text-xl md:text-3xl font-semibold md:font-bold tracking-tighter text-primary dark:text-slate-100">
              NAIROBI CINEMA KTAs2024 SEAT SELECTION
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold text-primary dark:text-darkGray text-center mb-5 uppercase bg-[#fcf4f3] px-[150px] shadow-md py-5 rounded-md">
              Stage
            </h1>
          </div>

          <div className="">
            <h3 className="text-dark dark:text-slate-50 font-bold flex gap-1 md:gap-2 justify-start items-center">
              Capacity:{" "}
              <span className="text-primary dark:text-dark dark:bg-[#ccc] dark:px-4">
                3 / 5
              </span>
            </h3>

            <p className="text-gray dark:text-[#ccc] font-semibold text-lg">
              Select your preferred seat to book
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-3">
            {/* Seat Map */}
            <div className="">
              <div className="flex gap-5 mt-5">
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

            <div className="">
              <h3 className="text-dark dark:text-slate-300 font-semibold flex gap-1 md:gap-2 justify-start items-center">
                Seat Selected:{" "}
                <div className="bg-[#ccc] px-4">
                  <span className="text-primary dark:text-secondary">1</span>
                </div>
              </h3>
            </div>
          </div>

          {/* Downstairs Seats Section */}
          <DownstairsSeatsComponent />

          {/* Upstairs Seats Section */}
          <UpstairsSeatsComponent />
        </div>
      </div>
    </div>
  );
};

export default NairobiCinemaSeatingPlan;
