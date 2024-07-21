import {
  TheaterSeatComponent as Seat,
  SelectedSeatsDrawer,
} from "@/components";
import { upstairsBackMiddleSectionData } from "@/components/data/NairobiCinemaSeatData";
import { useCallback, useState } from "react";
import { useSeatStore } from "@/store/UseSeatStore";

const UpstairsBackRowMiddleSection = () => {
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
      <div className="flex flex-col gap-2 border-gray/50 rounded-lg p-5 relative items-center">
        {upstairsBackMiddleSectionData.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.seats.map((seat, seatIndex) => {
              const seatData = {
                seatId: seat.id,
                seatNumber: seat.SN,
                row: row.rowLabel,
                column: seat.column,
                price: seat.price,
                discount: 0,
                status: seat.status,
                position: upstairsBackMiddleSectionData.location,
                description: upstairsBackMiddleSectionData.description,
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
      </div>

      {/* Handle Drawer Open */}
      <SelectedSeatsDrawer isOpen={drawerOpen} onClose={toggleDrawerOpen} />
    </>
  );
};

export default UpstairsBackRowMiddleSection;
