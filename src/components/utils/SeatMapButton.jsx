const SeatMapButton = ({ handleClick, icon, classes }) => {
  return (
    <button
      onClick={handleClick}
      className={`${classes} py-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter border border-gray/30`}
    >
      {icon}
    </button>
  );
};

export default SeatMapButton;
