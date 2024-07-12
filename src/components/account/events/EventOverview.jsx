import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  EventsTable,
  OverViewTitle,
  EventCategoryComponent,
  EventSubmissionsComponents,
} from "@/components";

const EventOverview = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate("/create-event");
  };
  return (
    <div className="w-full md:w-[75%]">
      {/* Overview Title */}
      <div className="flex items-center justify-between w-full">
        <OverViewTitle title="Events Management" breadcrumbTitle="Events" />

        <button
          onClick={handleCreateEvent}
          className="text-sm flex items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
        >
          <BiPlus />
          Create Event
        </button>
      </div>

      {/* Event Submissions */}
      <EventSubmissionsComponents />

      {/* Event Categories Component */}
      <EventCategoryComponent />

      {/* Events Table */}
      <EventsTable />
    </div>
  );
};

export default EventOverview;
