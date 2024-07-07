import { BiFile, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ArtistPerformance, ArtistTable } from "@/components";

const ArtistProfileOverview = () => {
  return (
    <div className="w-full md:w-[75%]">
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

      {/* Artists Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-10">
        {/* Total Artists Card */}
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary dark:bg-gray p-4 rounded">
              <BiFile className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
                Total Artists
              </h1>

              <p className="text-primary dark:text-gray mt-1 text-xl">
                Ksh 0.00
              </p>
            </div>
          </div>
        </div>

        {/* Total Published Card */}
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary dark:bg-gray p-4 rounded">
              <BiFile className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
                Total Published
              </h1>
              <p className="text-primary dark:text-gray mt-1 text-xl">134</p>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Performance */}
      <ArtistPerformance />

      {/* Artists Table */}
      <ArtistTable />
    </div>
  );
};

export default ArtistProfileOverview;
