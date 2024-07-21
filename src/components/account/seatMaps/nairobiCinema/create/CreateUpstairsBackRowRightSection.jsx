import {
  NewTheaterSeatComponent as Seat,
  CreateTheaterSeatsDrawer,
  SeatMapButton,
} from "@/components";
import { BiEditAlt } from "react-icons/bi";
import { useCallback, useContext, useState } from "react";
import { CreateNairobiCinemaContext } from "@/context/NairobiCinemaFormContext";

const CreateUpstairsBackRowRightSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { nairobiCinemaFormData } = useContext(CreateNairobiCinemaContext);
  const sectionData = nairobiCinemaFormData.upstairsBackRightSection;

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex flex-col items-start gap-2 border-gray/50 rounded-lg p-5 relative z-10">
        {sectionData.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 md:gap-2">
            {row.seats.map((seat, seatIndex) => {
              const seatData = {
                seatId: seat.id,
                seatNumber: seat.SN,
                row: row.rowLabel,
                column: seat.column,
                price: seat.price,
                discount: seat.discount,
                status: seat.status,
                position: sectionData.location,
                description: sectionData.description,
              };

              return (
                <Seat
                  key={seatIndex}
                  isGrayedOut={seat.SN === null}
                  isUpStares={true}
                  seatData={seatData}
                  onClick={() => {}}
                />
              );
            })}
            <span className="text-slate-100 dark:text-darkGray text-sm">
              {row.rowLabel}
            </span>
          </div>
        ))}

        {/* Stair Case */}
        <div
          style={{ zIndex: -1 }}
          className="w-[100px] h-[132px] bg-white dark:bg-darkGray absolute left-[132px]"
        >
          <div className="w-full h-full flex justify-center items-center -rotate-90">
            <h5 className="uppercase text-2xl font-bold tracking-tighter text-darkGray dark:text-slate-100">
              Stairs
            </h5>
          </div>
        </div>
      </div>

      <div className="top-3 right-0">
        <SeatMapButton
          handleClick={toggleDrawerOpen}
          icon={<BiEditAlt className="text-3xl" />}
          classes="bg-primary text-white"
        />
      </div>

      {/* Handle Drawer Open */}
      <CreateTheaterSeatsDrawer
        isOpen={drawerOpen}
        onClose={toggleDrawerOpen}
        sectionKey="upstairsBackRightSection"
      />
    </div>
  );
};

export default CreateUpstairsBackRowRightSection;
