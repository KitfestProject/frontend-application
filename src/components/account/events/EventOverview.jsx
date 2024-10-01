import { useContext } from "react";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { EventsTable, OverViewTitle } from "@/components";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";

const EventOverview = () => {
  const { setEventData, setEventFormData, initialEventForm } = useContext(
    CreateEventFormContext
  );
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    setEventFormData(initialEventForm);
    setEventData(null);
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

      {/* Events Table */}
      <EventsTable />
    </div>
  );
};

export default EventOverview;
