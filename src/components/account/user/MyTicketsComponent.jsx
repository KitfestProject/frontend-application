import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import EventsSection from "../dashboard/EventsSection";

const MyTicketsComponent = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div className="w-full md:w-[75%] md:px-5 px-1">
      <h1 className="text-xl font-bold text-dark dark:text-slate-100">
        My Tickets
      </h1>

      {/* Tabs */}
      <div className="md:flex gap-2 mt-5 hidden">
        <button className="bg-primary text-white py-2 px-5 rounded-md text-xs">
          Upcoming Events
        </button>

        <button className="bg-slate-200 hover:bg-primary hover:text-slate-100 text-dark dark:bg-dark dark:border dark:border-slate-700 dark:text-slate-400 py-2 text-xs px-5 rounded-md">
          Past Events
        </button>

        <button className="bg-slate-200 hover:bg-primary hover:text-slate-100 text-dark dark:bg-dark dark:border dark:border-slate-700 dark:text-slate-400 py-2 text-xs px-5 rounded-md">
          Cancelled Events
        </button>
      </div>

      {isEmpty && (
        <div className="grid place-content-center mt-10 h-full">
          <div className="flex flex-col gap-3 items-center justify-center mt-10 border dark:border-slate-100 border-primary rounded-md p-20">
            <BiInfoCircle className="text-5xl text-primary dark:text-slate-100" />
            <h3 className="text-md text-center text-dark dark:text-slate-100">
              You have no tickets yet
            </h3>
          </div>
        </div>
      )}

      {!isEmpty && <EventsSection />}
    </div>
  );
};

export default MyTicketsComponent;
