import { TheaterSeatComponent as Seat } from "@/components";

const UpstairsFrontRowMiddleSection = () => {
  const handleSeatClick = (seatNumber) => {
    alert(`Seat ${seatNumber} clicked`);
  };

  const sectionSeatData = {
    rowLabel: ["B"],
    seatNumbers: [
      [
        null,
        "B26",
        "B27",
        "B28",
        "B29",
        "B30",
        "B31",
        "B32",
        "B33",
        "B34",
        "B35",
        "B36",
        "B37",
      ],
    ],
  };

  return (
    <div className="flex flex-col gap-2 border-gray/50 rounded-lg p-5 relative items-center">
      {sectionSeatData.rowLabel.map((rowLabel, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 md:gap-2">
          {sectionSeatData.seatNumbers[rowIndex].map((seat, seatIndex) => (
            <Seat
              key={seatIndex}
              isGrayedOut={seat === null}
              isUpStares={true} 
              onClick={() => seat && handleSeatClick(seat)}
            />
          ))}
          <span className="text-slate-100 dark:text-gray text-sm">{rowLabel}</span>
        </div>
      ))}
    </div>
  );
};

export default UpstairsFrontRowMiddleSection;
