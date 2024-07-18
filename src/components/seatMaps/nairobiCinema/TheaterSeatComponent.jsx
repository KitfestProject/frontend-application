const TheaterSeatComponent = ({
  isGrayedOut,
  isEmpty,
  isSelected,
  isBooked,
  isUpStares,
  onClick,
}) => {
  let bgColor = `bg-gray hover:bg-yellow-500 hover:scale-110 ${
    isUpStares ? "dark:bg-darkGray" : ""
  }`;
  if (isGrayedOut) bgColor = "dark:bg-darkGray hidden";
  if (isSelected) bgColor = "bg-yellow-500";
  if (isBooked) bgColor = "bg-green-500";

  return (
    <div
      className={`w-3 h-3 md:w-5 md:h-5 rounded-t-3xl transition-all cursor-pointer ${bgColor}`}
      onClick={onClick}
    ></div>
  );
};
export default TheaterSeatComponent;
