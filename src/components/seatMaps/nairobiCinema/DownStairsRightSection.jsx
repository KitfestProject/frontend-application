import { TheaterSeatComponent as Seat } from "@/components";

const DownStairsRightSection = () => {
  const handleSeatClick = (seatNumber) => {
    console.log(`Seat ${seatNumber} clicked`);
  };

  const sectionSeatData = {
    rowLabel: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    seatNumbers: [
      ["A1", "A2", "A3", "A4", "A5", null, null, null],
      ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
      ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
      ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
      ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
      ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"],
      ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"],
      ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"],
      ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8"],
      ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8"],
      ["K1", "K2", "K3", "K4", "K5", "K6", "K7", "K8"],
      ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"],
      ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"],
    ],
  };

  return (
    <div className="flex flex-col gap-2 border-gray/50 rounded-lg p-5 relative">
      {sectionSeatData.rowLabel.map((rowLabel, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 md:gap-2">
          {sectionSeatData.seatNumbers[rowIndex].map((seat, seatIndex) => (
            <Seat
              key={seatIndex}
              isGrayedOut={seat === null}
              onClick={() => seat && handleSeatClick(seat)}
            />
          ))}
          <span className="dark:text-gray text-sm">{rowLabel}</span>
        </div>
      ))}
    </div>
  );
};

export default DownStairsRightSection;
