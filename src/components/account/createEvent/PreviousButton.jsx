import { FaArrowLeftLong } from "react-icons/fa6";

const PreviousButton = ({ title, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-[#FCF4F3] text-primary py-2 px-5 rounded-md flex justify-center items-center gap-2 text-sm"
    >
      <FaArrowLeftLong className="inline" />
      {title}
    </button>
  );
};

export default PreviousButton;
