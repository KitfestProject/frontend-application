const TheaterSeatComponent = ({
  isGrayedOut,
  isUpStares,
  onClick,
  seatData,
}) => {
  const handleSeatColor = (status, isUpStares) => {
    switch (status) {
      case "available":
        return isUpStares
          ? "bg-gray dark:bg-darkGray hover:bg-yellow-500 hover:scale-110 dark:hover:bg-yellow-500"
          : "bg-gray hover:bg-yellow-500 hover:scale-110";
      case "selected":
        return "bg-yellow-500";
      case "booked":
        return "bg-green-500";
      default:
        return "bg-gray";
    }
  };

  const seatColor = handleSeatColor(seatData?.status, isUpStares);
  const grayedOutClass = isGrayedOut ? "dark:bg-darkGray hidden" : "";

  return (
    <div
      className={`w-3 h-3 border-b-[2px] border-cyan-500
       md:w-5 md:h-5 rounded-t-3xl transition-all cursor-pointer ${seatColor} ${grayedOutClass} relative group`}
      onClick={onClick}
    >
      <div
        style={{ zIndex: 20 }}
        className={`absolute hidden group-hover:block bg-gray-800 p-2 text-white dark:border dark:border-slate-100 ${handleSeatColor(
          seatData?.status,
          isUpStares
        )} text-sm rounded bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-[150px] shadow-md`}
      >
        <div className="flex items-center justify-center gap-2">
          {/* Seat Position & Number */}
          <div className="flex flex-col">
            <span className="text-md font-semibold">{seatData?.position}</span>
            <span className="font-bold text-2xl tracking-tighter">
              {seatData?.seatNumber}
            </span>
          </div>

          {/* Seat Price & Description */}
          <div className="flex flex-col">
            <span className="text-md font-semibold">
              Ksh. {seatData?.price ?? 0}
            </span>
            <span className="text-xs">{seatData?.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheaterSeatComponent;
