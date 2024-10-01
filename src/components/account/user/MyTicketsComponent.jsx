import { useContext, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import EventsSection from "../dashboard/EventsSection";
import { UserAccountContext } from "@/context/UserAccountContext";
import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyTicketsComponent = () => {
  const { clientTicketData, userDataLoading } = useContext(UserAccountContext);

  // console.log(clientTicketData?.length);

  return (
    <div className="w-full md:w-[75%] md:px-5 px-1">
      <h1 className="text-xl font-bold text-dark dark:text-slate-100">
        My Tickets
      </h1>

      {/* Tabs */}
      {/* <div className="md:flex gap-2 mt-5 hidden">
        <button className="bg-primary text-white py-2 px-5 rounded-md text-xs">
          Upcoming Events
        </button>

        <button className="bg-slate-200 hover:bg-primary hover:text-slate-100 text-dark dark:bg-dark dark:border dark:border-slate-700 dark:text-slate-400 py-2 text-xs px-5 rounded-md">
          Past Events
        </button>

        <button className="bg-slate-200 hover:bg-primary hover:text-slate-100 text-dark dark:bg-dark dark:border dark:border-slate-700 dark:text-slate-400 py-2 text-xs px-5 rounded-md">
          Cancelled Events
        </button>
      </div> */}

      {!userDataLoading && clientTicketData?.length === 0 ? (
        <div className="text-center w-full mt-[20%] grid place-content-center">
          <div className="flex flex-col justify-center items-center w-full">
            <FaTriangleExclamation className="text-primary text-4xl" />
            <h3 className="text-xl font-bold tracking-tighter dark:text-slate-100">
              No Tickets Found!
            </h3>
          </div>

          <p className="text-sm text-gray dark:text-gray">
            You have not purchased any ticket. Please explore events.
          </p>

          <Link
            to="/events"
            className="text-primary dark:text-primary-dark mt-5 border rounded-md border-primary py-2"
          >
            Explore Events
          </Link>
        </div>
      ) : (
        <EventsSection />
      )}

      {/* Loading State */}
      {userDataLoading && (
        <div className="grid place-content-center mt-10">
          <div className="flex flex-col gap-3 items-center justify-center mt-10">
            <div className="animate-pulse flex flex-col gap-3 items-center justify-center mt-10 border dark:border-slate-100 border-primary rounded-md p-20">
              <BiInfoCircle className="text-5xl text-primary dark:text-slate-100" />
              <h3 className="text-md text-center text-dark dark:text-slate-100">
                Loading your tickets...
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTicketsComponent;
