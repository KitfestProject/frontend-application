import {
  TheaterSeatComponent as Seat,
  SelectedSeatsDrawer,
} from "@/components";
import { useCallback, useContext, useState } from "react";
import { useSeatStore } from "@/store/UseSeatStore";
import { SeatMapContext } from "@/context/SeatMapContext";
import { useLocation } from "react-router-dom";

const UpstairsBackRowMiddleSection = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { addSelectedSeat } = useSeatStore();
  const { eventSeatMap, seatMapLoading, setEventSeatMap } =
    useContext(SeatMapContext);
  const sectionSeats = eventSeatMap.upstairsBackMiddleSection;

  const location = useLocation();
  const paths = location.pathname.split("/");
  const pagePath = paths[paths.length - 2];

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleSeatClick = (seat) => {
    if (pagePath === "progress") return;
    
    if (seat.status === "booked" || seat.status === "selected")
      return toggleDrawerOpen();

    setEventSeatMap((prev) => {
      const updatedSeatMap = { ...prev };
      const updatedSection = { ...updatedSeatMap.upstairsBackMiddleSection };
      const updatedRows = updatedSection.rows.map((row) => ({
        ...row,
        seats: row.seats.map((s) => {
          if (s._id === seat._id) {
            return {
              ...s,
              status: s.status === "available" ? "selected" : "available",
            };
          }
          return s;
        }),
      }));

      updatedSection.rows = updatedRows;
      updatedSeatMap.upstairsBackMiddleSection = updatedSection;

      return updatedSeatMap;
    });

    setSelectedSeat(seat);
    toggleDrawerOpen();
    addSelectedSeat(seat);
  };

  return (
    <>
      <div className="flex flex-col gap-2 border-gray/50 rounded-lg p-5 relative items-center">
        {seatMapLoading ? (
          <div className="text-slate-100 dark:text-darkGray font-semibold text-md place-content-center">
            Arranging Seats...
          </div>
        ) : (
          <>
            {sectionSeats?.rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2">
                {row?.seats.map((seat, seatIndex) => {
                  const seatData = {
                    _id: seat._id,
                    seatId: seat.id,
                    seatNumber: seat.SN,
                    row: row.rowLabel,
                    column: seat.column,
                    price: seat.price,
                    discount: seat.discount,
                    status: seat.status,
                    position: sectionSeats?.location,
                    description: sectionSeats?.description,
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
          </>
        )}
      </div>

      {/* Handle Drawer Open */}
      <SelectedSeatsDrawer isOpen={drawerOpen} onClose={toggleDrawerOpen} />
    </>
  );
};

export default UpstairsBackRowMiddleSection;
