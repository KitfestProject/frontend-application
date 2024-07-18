import { TheaterSeatComponent as Seat } from "@/components";

const UpstairsBackRowLeftSection = () => {
  const handleSeatClick = (seatNumber) => {
    alert(`Seat ${seatNumber} clicked`);
  };

  const sectionSeatData = {
    rowLabel: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "M",
    ],
    seatNumbers: [
      [null, null, null, null, "A15", "A16", "A17", "A18"],
      [null, null, null, null, "B22", "B23", "B24", "B25"],
      [null, null, null, null, "C22", "C23", "C24", "C25"],
      [null, null, null, null, "D22", "D23", "D24", "D25"],
      [null, null, null, null, "E22", "E23", "E24", "E25"],
      ["F26", "F27", "F28", "F29", "F30", "F31", "F32", "F33"],
      ["G26", "G27", "G28", "G29", "G30", "G31", "G32", "G33"],
      ["H26", "H27", "H28", "H29", "H30", "H31", "H32", "H33"],
      ["I26", "I27", "I28", "I29", "I30", "I31", "I32", "I33"],
      ["J26", "J27", "J28", "J29", "J30", "J31", "J32", "J33"],
      ["K26", "K27", "K28", "K29", "K30", "K31", "K32", "K33"],
      ["L26", "L27", "L28", "L29", "L30", "L31", "L32", "L33"],
      ["M26", "M27", "M28", "M29", "M30", "M31", "M32", "M33"],
      [null, "M34", "M35", "M36", "M37", "M38", "M39", "M40"],
    ],
  };

  return (
    <div className="flex flex-col items-end gap-2 border-gray/50 rounded-lg p-5 relative">
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
          <span className="text-slate-100 dark:text-darkGray text-sm">
            {rowLabel}
          </span>
        </div>
      ))}
      <div className="w-[100px] h-[132px] bg-white dark:bg-darkGray absolute right-[150px]">
        <div className="w-full h-full flex justify-center items-center -rotate-90">
          <h5 className="uppercase text-2xl font-bold tracking-tighter text-darkGray dark:text-slate-100">
            Stairs
          </h5>
        </div>
      </div>
    </div>
  );
};

export default UpstairsBackRowLeftSection;
