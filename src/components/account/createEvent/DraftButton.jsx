import PropTypes from "prop-types";
import { BiSolidSave } from "react-icons/bi";

const DraftButton = ({ title, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-[#FCF4F3] text-primary py-2 px-5 rounded-md flex justify-center items-center gap-2 text-sm shadow-md shadow-primary/50"
    >
      <BiSolidSave className="inline" />
      {title}
    </button>
  );
};

DraftButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DraftButton;
