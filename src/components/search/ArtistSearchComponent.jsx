import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
import ProfileAvatar from "@/assets/profile-avatar.jpeg";
import { useNavigate } from "react-router-dom";

const ArtistSearchComponent = ({ name, image, title, isLastItem }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/artist-profile/" + name)}
      className={`flex items-center gap-5 rounded-md hover:bg-primary/10 dark:hover:bg-gray/20 p-3 cursor-pointer ${
        isLastItem ? "" : "border-b border-gray/10"
      }`}
    >
      <div className="w-1/2">
        <div className="flex gap-2 items-center">
          <div className="">
            <div className="w-[55px] h-[55px] rounded-full bg-gray/20">
              <img
                src={image ?? ProfileAvatar}
                className="w-full h-full rounded-full"
                alt="Artist image"
              />
            </div>
          </div>

          <div className="">
            <h5 className="text-dark dark:text-slate-100 text-md leading-tight font-semibold">
              {name}
            </h5>
            <p className="text-gray text-xs">{title}</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <button className="text-primary dark:text-gray">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

ArtistSearchComponent.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default ArtistSearchComponent;
