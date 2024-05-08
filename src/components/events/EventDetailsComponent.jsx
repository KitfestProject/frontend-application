import React from "react";
import MapCanvasComponent from "../utils/MapCanvasComponent";
import { BiCalendarAlt, BiMap } from "react-icons/bi";
import { FaCouch, FaRegClock, FaTicket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import useTimeAgo from "../../hooks/useTimeAgo.mjs";

const EventDetailsComponent = ({ eventData }) => {
  const { formatEventDate } = useTimeAgo();
  return (
    <div className="dark:bg-darkGray dark:p-5 rounded-lg">
      {/* Date & Place */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:items-center">
        <div className="flex gap-5 items-center">
          <div className="p-5 rounded-md bg-[#fcf4f3]">
            <BiCalendarAlt className="text-4xl text-primary" />
          </div>

          <div className="flex flex-col">
            <p className="text-base text-gray-500 mt-2 font-bold dark:text-slate-100">
              Date Time
            </p>
            <p className="text-sm text-gray">
              {formatEventDate(eventData.date)}
            </p>
            {/* Time */}
            <div className="flex items-center">
              <span className="text-sm text-gray">Time:</span>
              <span className="text-sm text-gray ml-2">9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="p-5 rounded-md bg-[#fcf4f3]">
            <BiMap className="text-4xl text-primary" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg text-gray-500 dark:text-slate-100 mt-2 font-bold">
              Place
            </p>
            <p className="text-sm text-gray dark:text-gray-400">
              {eventData.location}
            </p>
          </div>
        </div>
      </div>

      {/* Map Canvas */}
      <div className="mt-10">
        <MapCanvasComponent
          longitude={eventData.longitude}
          latitude={eventData.latitude}
        />
      </div>

      {/* About Event*/}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-dark dark:text-slate-200">
          About Event
        </h3>

        {/* Date & Place */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:items-center mt-10">
          <div className="flex gap-5 items-center">
            <div className="p-5 rounded-md bg-[#fcf4f3]">
              <FaCouch className="text-4xl text-primary" />
            </div>

            <div className="flex flex-col">
              <p className="text-lg text-gray-500 dark:text-slate-100 mt-2 font-bold">
                Seats
              </p>

              <Link to="" className="flex items-center">
                <span className="text-base text-primary dark:text-secondary">
                  View Available Seats
                </span>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <div className="bg-[#fcf4f3] h-[40px] w-[40px] flex justify-center items-center rounded-full ml-3">
                    <HiOutlineArrowNarrowLeft className="text-xl text-primary" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="p-5 rounded-md bg-[#fcf4f3]">
              <FaRegClock className="text-4xl text-primary" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-gray-500 dark:text-slate-100 mt-2 font-bold">
                Duration
              </p>
              <p className="text-base text-gray dark:text-gray-400">
                {eventData.duration}
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="p-5 rounded-md bg-[#fcf4f3]">
              <FaTicket className="text-4xl text-primary" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-gray-500 dark:text-slate-100 mt-2 font-bold">
                Ticket
              </p>
              <p className="text-base text-gray dark:text-gray-400">
                {eventData.ticketType}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Synopsis */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-dark dark:text-slate-200">
          Synopsis
        </h3>

        <div className="">
          <p className="text-base text-gray dark:text-slate-100 mt-2">
            {eventData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsComponent;
