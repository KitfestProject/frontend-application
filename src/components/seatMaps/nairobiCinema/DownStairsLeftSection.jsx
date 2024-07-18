import { TheaterSeatComponent as Seat } from "@/components";

const DownStairsLeftSection = () => {
  const handleSeatClick = (seatNumber) => {
    alert(`Seat ${seatNumber} clicked`);
  };

  const sectionSeatData = {
    rowLabel: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    seatNumbers: [
      [null, null, null, "A6", "A7", "A8", "A9", "A10"],
      ["B9", "B10", "B11", "B12", "B13", "B14", "B15", "B16"],
      ["C9", "C10", "C11", "C12", "C13", "C14", "C15", "C16"],
      ["D9", "D10", "D11", "D12", "D13", "D14", "D15", "D16"],
      ["E9", "E10", "E11", "E12", "E13", "E14", "E15", "E16"],
      ["F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16"],
      ["G9", "G10", "G11", "G12", "G13", "G14", "G15", "G16"],
      ["H9", "H10", "H11", "H12", "H13", "H14", "H15", "H16"],
      ["I9", "I10", "I11", "I12", "I13", "I14", "I15", "I16"],
      ["J9", "J10", "J11", "J12", "J13", "J14", "J15", "J16"],
      ["K9", "K10", "K11", "K12", "K13", "K14", "K15", "K16"],
      ["L9", "L10", "L11", "L12", "L13", "L14", "L15", "L16"],
      ["M9", "M10", "M11", "M12", "M13", "M14", "M15", "M16"],
    ],
  };

  return (
    <div className="flex flex-col gap-2 border-gray/50 rounded-lg p-5 relative items-end">
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

export default DownStairsLeftSection;
