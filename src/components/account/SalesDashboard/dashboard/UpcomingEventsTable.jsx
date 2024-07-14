import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";

const UpcomingEventsTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const baseUrl = `${import.meta.env.VITE_KITFT_API_PRODUCTION}`;
  const navigate = useNavigate();

  const upcomingEvents = [
    {
      eventDetails: "Kenya music extravaganza",
      eventLocation: "Embakasi, Nairobi",
      eventDate: "Monday, June 10",
      eventStatus: "In 5 Days",
      capacity: "300",
      sold: "300",
      revenue: "Ksh. 110,000",
      eventImage: "/images/Event-1.png",
    },
    {
      eventDetails: "A Legendary Gathering",
      eventLocation: "Ngon'g Road Nairobi",
      eventDate: "Monday, June 10",
      eventStatus: "Next month",
      capacity: "100",
      sold: "20",
      revenue: "Ksh. 20,000",
      eventImage: "/images/Event-3.png",
    },
    {
      eventDetails: "Ngoma n’ Sarakasi",
      eventLocation: "Nairobi, Kenya",
      eventDate: "Monday, June 10",
      eventStatus: "in 2 weeks",
      capacity: "500",
      sold: "100",
      revenue: "Ksh. 50,000",
      eventImage: "/images/Event-5.png",
    },
    {
      eventDetails: "Sakata Rumba",
      eventLocation: "Nairobi, Kenya",
      eventDate: "Monday, June 10",
      eventStatus: "in 1 weeks",
      capacity: "200",
      sold: "50",
      revenue: "Ksh. 15,000",
      eventImage: "/images/Event-2.png",
    },
    {
      eventDetails: "Kikwetu Festival",
      eventLocation: "Nairobi, Kenya",
      eventDate: "Monday, June 10",
      eventStatus: "in 3 weeks",
      capacity: "1000",
      sold: "500",
      revenue: "Ksh. 200,000",
      eventImage: "/images/Event-6.png",
    },
  ];

  return (
    <div className="w-full mt-10">
      <h1 className="text-xl font-semibold text-dark dark:text-slate-100 mb-3">
        Upcoming Events
      </h1>

      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
        <table
          ref={tableRef}
          id="attendee_table"
          className="min-w-full bg-white dark:bg-darkGray"
        >
          <thead className="rounded-md">
            <tr className="bg-primary dark:bg-gray text-white">
              <th className="px-4 py-3 font-semibold text-start">
                Event Details
              </th>
              <th className="px-4 py-3 font-semibold text-start">Event Date</th>
              <th className="px-4 py-3 font-semibold text-start">
                Ticket Sold
              </th>
              <th className="px-4 py-3 font-semibold text-start">Revenue</th>
            </tr>
          </thead>
          <tbody className="text-gray">
            {upcomingEvents.map((event, index) => (
              <tr
                key={index}
                className={`dark:border-b ${
                  index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
                } dark:text-slate-200 dark:border-gray/30`}
              >
                {/* Event Details */}
                <td className="px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={event.eventImage}
                      alt="event"
                      className="w-20 h-14 rounded"
                    />
                    <div>
                      <p className="font-semibold text-dark dark:text-slate-100">
                        {event.eventDetails}
                      </p>
                      <p className="text-sm text-gray-400">
                        {event.eventLocation}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Event Date */}
                <td className="px-4">
                  <div className="flex items-center gap-2">
                    <div className="">
                      <p className="">{event.eventDate}</p>
                    </div>

                    <div className="ml-5 px-3 py-1 bg-slate-100 rounded-full">
                      <p className="text-xs text-primary dark:text-dark">
                        {event.eventStatus}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Ticket Sold */}
                <td className="px-4">
                  {event.capacity === event.sold ? (
                    <div className="flex items-center gap-1">
                      <div className="px-3 py-1 bg-red-100 rounded-full">
                        <p className="text-xs text-red-600 dark:text-dark">Sold Out</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <div className="px-3 py-1 bg-green-100 rounded-full">
                        <p className="text-xs text-green-600 dark:text-dark">
                          {event.sold}/{event.capacity}
                        </p>
                      </div>
                    </div>
                  )}
                </td>

                {/* Revenue */}
                <td className="px-4">{event.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingEventsTable;
