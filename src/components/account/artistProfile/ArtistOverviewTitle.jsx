import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const ArtistOverviewTitle = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray/20 pb-3">
      <div className="flex justify-between items-start">
        <div className="">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <p className="text-gray tracking-tight">Account</p>
            <span className="text-gray-500">/</span>
            <p className="text-gray-500 tracking-tight">Artists</p>
          </div>

          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            Artists Management
          </h1>
        </div>
      </div>

      {/* Create Blogs Button */}
      <div className="">
        <Link
          to="/artists/create-artist"
          className="bg-primary text-slate-100 text-sm px-6 py-2 rounded-md flex gap-2 items-center"
        >
          <BiPlus className="text-[24px]" /> Create Artist
        </Link>
      </div>
    </div>
  );
};

export default ArtistOverviewTitle;
