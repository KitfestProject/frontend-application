import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const EventOverview = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate("/create-event");
  };
  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-start border-b border-slate-200 pb-5">
        <div className="">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <p className="text-gray tracking-tight">Account</p>
            <span className="text-gray-500">/</span>
            <p className="text-gray-500 tracking-tight">Events</p>
          </div>

          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            Events Management
          </h1>
        </div>

        <button
          onClick={handleCreateEvent}
          className="bg-primary text-white py-2 px-5 rounded-md"
        >
          Create Event
          <BiPlus className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default EventOverview;
