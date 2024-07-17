import PropTypes from "prop-types";
import { Loader } from "@/components";
import { BiSolidSave } from "react-icons/bi";

const BlogDraftButton = ({ title, handleClick, loading }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-[#FCF4F3] text-primary py-2 px-8 rounded-md flex justify-center items-center gap-2 text-sm shadow-md shadow-primary/50"
    >
      {loading && <Loader className="w-4 h-4" color="#732e1c" />}

      {!loading && (
        <>
          <BiSolidSave className="w-5 h-5" />
          {title}
        </>
      )}
    </button>
  );
};

BlogDraftButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BlogDraftButton;
