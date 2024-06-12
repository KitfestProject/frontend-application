import PropTypes from "prop-types";
import { BiX } from "react-icons/bi";

const CancelButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-slate-200 text-dark dark:text-slate-100 dark:bg-gray py-2 px-5 rounded-md flex justify-center items-center gap-1 text-sm shadow-md shadow-gray dark:shadow-none"
    >
      <BiX className="inline text-xl" />
      {title}
    </button>
  );
};

CancelButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CancelButton;
