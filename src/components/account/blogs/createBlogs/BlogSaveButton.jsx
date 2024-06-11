import PropTypes from "prop-types";
import { BiCheck } from "react-icons/bi";

const BlogSaveButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-primary text-white py-2 px-5 rounded-md flex justify-center items-center gap-2 text-sm"
    >
      <BiCheck className="inline" /> {title}
    </button>
  );
};

BlogSaveButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BlogSaveButton;
