import PropTypes from "prop-types";
import { Loader } from "@/components";
import { BiCheck } from "react-icons/bi";

const BlogSaveButton = ({ title, handleClick, loading }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-primary text-white py-2 px-8 rounded-md flex justify-center items-center gap-2 text-sm"
    >
      {loading && <Loader className="w-4 h-4" />}

      {!loading && (
        <>
          <BiCheck className="w-5 h-5" />
          {title}
        </>
      )}
    </button>
  );
};

BlogSaveButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BlogSaveButton;
