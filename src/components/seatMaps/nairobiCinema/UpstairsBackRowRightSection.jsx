import {
  TheaterSeatComponent as Seat,
  SelectedSeatsDrawer,
} from "@/components";
import { upstairsBackRightSectionData } from "@/components/data/NairobiCinemaSeatData";
import { useCallback, useState } from "react";
import { useSeatStore } from "@/store/UseSeatStore";

const UpstairsBackRowRightSection = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { addSelectedSeat } = useSeatStore();

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleSeatClick = (seat) => {
    if (seat.status === "booked" || seat.status === "selected") return;

    setSelectedSeat(seat);
    toggleDrawerOpen();
    addSelectedSeat(seat);
  };

  return (
    <>
      <div className="flex flex-col items-start gap-2 border-gray/50 rounded-lg p-5 relative z-10">
        {upstairsBackRightSectionData.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.seats.map((seat, seatIndex) => {
              const seatData = {
                seatId: seat.id,
                seatNumber: seat.SN,
                row: row.rowLabel,
                column: seat.column,
                price: seat.price,
                status: seat.status,
                position: upstairsBackRightSectionData.location,
                description: upstairsBackRightSectionData.description,
              };
              return (
                <Seat
                  key={seatIndex}
                  isGrayedOut={seat.SN === null}
                  isUpStares={true}
                  seatData={seatData}
                  selectedSeat={selectedSeat}
                  onClick={() => seat.SN && handleSeatClick(seatData)}
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

      {/* Handle Drawer Open */}
      <SelectedSeatsDrawer isOpen={drawerOpen} onClose={toggleDrawerOpen} />
    </>
  );
};

export default UpstairsBackRowRightSection;
