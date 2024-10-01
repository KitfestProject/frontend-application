import PropTypes from "prop-types";
import { BiCheck } from "react-icons/bi";
import { Loader } from "@/components";

const PublishEventButton = ({ title, loading, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-primary text-white py-2 px-5 rounded-md flex justify-center items-center gap-2 text-sm"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <BiCheck className="inline" /> {title}
        </>
      )}
    </button>
  );
};

PublishEventButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PublishEventButton;
