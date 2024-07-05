import { BiPlus } from "react-icons/bi";
import VenueOverviewTable from "./VenueOverviewTable";
import { useNavigate } from "react-router-dom";

const VenueOverview = () => {
  const navigate = useNavigate();

  const handleCreateVenue = () => {
    navigate("/venues/create-venue");
  };

  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-start border-b border-gray/30 pb-5">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <p className="text-gray tracking-tight">Account</p>
            <span className="text-gray-500">/</span>
            <p className="text-gray-500 tracking-tight">Venues</p>
          </div>

          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
              Venues Management
            </h1>

            {/* Create Event Button */}
            <button
              onClick={handleCreateVenue}
              className="text-sm flex items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
            >
              <BiPlus />
              Create Venue
            </button>
          </div>
        </div>
      </div>

      {/* Venues Overview Table */}
      <div className="w-full mt-10">
        <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
          Venues List
        </h1>

        <VenueOverviewTable />
      </div>
    </div>
  );
};

export default VenueOverview;
