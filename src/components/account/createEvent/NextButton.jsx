import { FaArrowRightLong } from "react-icons/fa6";

const NextButton = ({ title, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-primary text-white py-2 px-5 rounded-md flex justify-center items-center gap-2 text-sm"
    >
      {title} <FaArrowRightLong className="inline" />
    </button>
  );
};

export default NextButton;
