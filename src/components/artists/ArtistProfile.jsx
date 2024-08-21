import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const ArtistProfile = ({ artist }) => {
  // console.log(artist);
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-darkGray rounded-lg shadow-lg overflow-hidden dark:border dark:border-slate-700">
      <div
        // onClick={() => navigate(`/artists/${artist?.id}`)}
        className="bg-gray-200 dark:bg-gray-800 h-40 sm:h-[330px] w-full cursor-pointer"
      >
        <Link to={`/artists/${artist?.id}`}>
          <img
            src={artist?.image}
            alt="Artist Profile"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </Link>
      </div>

      <div className="p-3">
        <h1 className="text-xl font-bold text-primary dark:text-slate-100 mb-1">
          {artist?.name}
        </h1>

        <p className="text-gray text-sm font-semibold uppercase tracking-tight leading-tight mb-2">
          {artist?.role}
        </p>

        <div className="mt-2 hidden">
          <a
            href="#"
            className="text-primary text-sm bg-[#fff1ee] hover:bg-primary hover:text-slate-100 dark:bg-[#fff1ee]/50 py-2 rounded-sm dark:text-dark w-full flex items-center justify-center gap-2"
          >
            View Profile <FaArrowRightLong />
          </a>
        </div>
      </div>
    </div>
  );
};

ArtistProfile.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistProfile;
