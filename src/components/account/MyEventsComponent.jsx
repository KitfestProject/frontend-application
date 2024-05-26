import React from "react";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MyEventsComponent = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate("/create-event");
  };
  return (
    <section className="container mx-auto my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
          My Events
        </h1>

        <button
          onClick={handleCreateEvent}
          className="bg-primary text-white py-2 px-5 rounded-md"
        >
          Create Event
          <BiPlus className="inline-block ml-2" />
        </button>
      </div>
    </section>
  );
};

export default MyEventsComponent;
