import { TheaterSeatComponent as Seat } from "@/components";
import { downStairsRightSectionData } from "@/components/data/NairobiCinemaSeatData";

const DownStairsRightSection = () => {
  const handleSeatClick = (seat) => {
    alert(
      `Seat ${seat.seatNumber} clicked in row:${seat.row} column:${seat.column}`
    );
  };

  return (
    <div className="flex flex-col gap-2 border-gray/50 rounded-lg p-5 relative">
      {downStairsRightSectionData.rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 md:gap-2">
          {row.seats.map((seat, seatIndex) => (
            <Seat
              key={seatIndex}
              isGrayedOut={seat.SN === null}
              onClick={() =>
                seat.SN &&
                handleSeatClick({
                  seatNumber: seat.SN,
                  row: row.rowLabel,
                  column: seat.column,
                  price: seat.price,
                  location: downStairsRightSectionData.location,
                })
              }
            />
          ))}
          <span className="dark:text-gray text-sm">{row.rowLabel}</span>
        </div>
      ))}
    </div>
  );
};

export default DownStairsRightSection;
