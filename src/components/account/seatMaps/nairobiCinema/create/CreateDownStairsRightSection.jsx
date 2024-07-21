import {
  NewTheaterSeatComponent as Seat,
  CreateTheaterSeatsDrawer,
  SeatMapButton,
} from "@/components";
import { BiEditAlt } from "react-icons/bi";
import { useCallback, useContext, useState } from "react";
import { CreateNairobiCinemaContext } from "@/context/NairobiCinemaFormContext";

const CreateDownStairsRightSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { nairobiCinemaFormData } = useContext(CreateNairobiCinemaContext);
  const sectionData = nairobiCinemaFormData.downStairsRightSection;

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="">
        <SeatMapButton
          handleClick={toggleDrawerOpen}
          icon={<BiEditAlt className="text-3xl" />}
          classes="bg-primary text-white"
        />
      </div>

      <div className="flex flex-col gap-2 border-gray/50 rounded-lg p-5 relative">
        {sectionData.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
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
                  seatData={seatData}
                  onClick={() => {}}
                />
              );
            })}
            <span className="dark:text-gray text-sm">{row.rowLabel}</span>
          </div>
        ))}
      </div>

      {/* Handle Drawer Open */}
      <CreateTheaterSeatsDrawer
        isOpen={drawerOpen}
        onClose={toggleDrawerOpen}
        sectionKey="downStairsRightSection"
      />
    </div>
  );
};

export default CreateDownStairsRightSection;
