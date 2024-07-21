import useCurrencyConverter from "@/hooks/useCurrencyConverter";

const NewTheaterSeatComponent = ({
  isGrayedOut,
  isUpStares,
  onClick,
  seatData,
}) => {
  const { formatCurrency } = useCurrencyConverter();

  const handleSeatColor = (status, isUpStares) => {
    switch (status) {
      case "available":
        return isUpStares
          ? "bg-darkGray dark:bg-darkGray hover:scale-110"
          : "bg-darkGray hover:scale-110";
      case "selected":
        return "bg-yellow-500";
      case "booked":
        return "bg-green-500";
      default:
        return "bg-gray";
    }
  };

  const handlePriceSetColor = (price) => {
    if (price !== null && price !== undefined && price > 0 && price !== "") {
      return "bg-cyan-500";
    } else {
      return isUpStares
        ? "bg-gray dark:bg-darkGray hover:scale-110"
        : "bg-gray hover:scale-110";
    }
  };

  const seatColor = handleSeatColor(seatData?.status, isUpStares);
  const grayedOutClass = isGrayedOut ? "dark:bg-darkGray hidden" : "";

  return (
    <div
      className={`border-b-[2px] border-cyan-500
         w-5 h-5 rounded-t-3xl transition-all cursor-pointer ${handlePriceSetColor(
           seatData?.price
         )} ${grayedOutClass} relative group`}
      onClick={onClick}
    >
      <div
        style={{ zIndex: 20 }}
        className={`absolute hidden group-hover:block bg-darkGray p-2 text-white dark:border dark:border-slate-100 ${handleSeatColor(
          seatData?.status,
          isUpStares
        )} text-sm rounded bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-[180px] shadow-md border-t-4 border-cyan-500`}
      >
        <div className="">
          {/* Seat Position & Number */}
          <div className="flex flex-col">
            <h5 className="text-md font-semibold text-center border-b border-slate-300 pb-2">
              Section: {seatData?.position}
            </h5>

            <div className="flex justify-start items-baseline gap-2">
              <span className="text-md font-semibold">Seat No:</span>
              <span className="font-bold text-2xl tracking-tighter">
                {seatData?.seatNumber}
              </span>
            </div>

            <span className="text-md font-semibold">
              Price:{" "}
              <span className="text-green-500">
                {formatCurrency(+seatData?.price) ?? 0}
              </span>
            </span>

            <span className="text-md font-semibold">
              Discount:{" "}
              <span className="text-green-500">
                {formatCurrency(+seatData?.discount) ?? 0}
              </span>
            </span>

            <span className="text-md font-semibold">
              Column No: <span className="text-md text-blue-500">{seatData?.column}</span>
            </span>

            <span className="text-md font-semibold">
              Row No: <span className="text-md text-blue-500">{seatData?.row}</span>
            </span>

            <span className="text-md font-semibold">
              Description:{" "}
              <span className="text-xs text-blue-500">{seatData?.description}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTheaterSeatComponent;
