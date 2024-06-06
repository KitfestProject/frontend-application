import React, { useEffect, useRef, useState } from "react";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "../../../axiosClient";
import ProfileAvatar from "../../../assets/profile-avatar.jpeg";

const EventsTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const baseUrl = `${import.meta.env.VITE_KITFT_API_PRODUCTION}`;

  const recentBookings = [
    {
      id: "5",
      title: "Kenya music extravaganza",
      location: "Nairobi, Kenya",
      eventImage: "/images/Event-1.png",
      status: "published",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "6",
      title: "Another exclusive event",
      location: "Nairobi, Kenya",
      eventImage: "/images/Event-5.png",
      status: "draft",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "7",
      title: "Sarakasi za Ojwan'g",
      location: "Nairobi, Kenya",
      status: "cancelled",
      eventImage: "/images/Event-3.png",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "8",
      title: "An enemy of the people",
      location: "Nairobi, Kenya",
      status: "published",
      eventImage: "/images/Event-2.png",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "9",
      title: "The great migration",
      location: "Nairobi, Kenya",
      status: "draft",
      eventImage: "/images/Event-3.png",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "10",
      title: "The great migration",
      location: "Nairobi, Kenya",
      status: "draft",
      eventImage: "/images/Event-1.png",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "11",
      title: "The great migration",
      location: "Nairobi, Kenya",
      status: "published",
      eventImage: "/images/Event-6.png",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "12",
      title: "The great migration",
      location: "Nairobi, Kenya",
      status: "published",
      eventImage: "/images/Event-5.png",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "13",
      title: "The great migration",
      location: "Nairobi, Kenya",
      status: "published",
      eventImage: "/images/Event-2.png",
      capacity: 300,
      created_at: "2021-10-12",
    },
    {
      id: "14",
      title: "The great migration",
      location: "Nairobi, Kenya",
      status: "published",
      eventImage: "/images/Event-1.png",
      capacity: 300,
      created_at: "2021-10-12",
    },
  ];

  const navigate = useNavigate();

  const changeStatus = (status) => {
    if (status === "published") {
      return "bg-green-600";
    } else if (status === "draft") {
      return "bg-yellow-600";
    } else if (status === "cancelled") {
      return "bg-red-600";
    }
  };

  return (
    <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-slate-700">
      <table
        ref={tableRef}
        id="attendee_table"
        className="min-w-full bg-white dark:bg-darkGray"
      >
        <thead className="rounded-md">
          <tr className="bg-primary dark:bg-gray text-white">
            <th className="px-4 py-3 font-semibold text-start">#ID</th>
            <th className="px-4 py-3 font-semibold text-start">
              Event Details
            </th>
            <th className="px-4 py-3 font-semibold text-start">Event Date</th>
            <th className="px-4 py-3 font-semibold text-start">Status</th>
            <th className="px-4 py-3 font-semibold text-start">Capacity</th>
            <th className="px-4 py-3 font-semibold text-center">Action</th>
          </tr>
        </thead>

        <tbody className="text-gray">
          {recentBookings.map((booking, index) => (
            <tr
              key={index}
              className={`dark:border-b ${
                index % 2 === 0 ? "odd:bg-primary/5" : ""
              } dark:text-slate-200 dark:border-gray/30`}
            >
              {/* Ticket Code */}
              <td className="px-4 py-3 text-center">
                <p className="text-sm font-semibold text-dark dark:text-slate-100">
                  {booking.id}
                </p>
              </td>

              {/* Buyer Information */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src={booking.eventImage}
                    alt="event"
                    className="w-20 h-14 rounded"
                  />
                  <div>
                    <p className="font-semibold text-dark dark:text-slate-100 leading-tight">
                      {booking.title}
                    </p>
                    <p className="text-sm text-gray-400">{booking.location}</p>
                  </div>
                </div>
              </td>

              {/* Purchase Date */}
              <td className="px-4 py-3">
                <p className="dark:text-slate-100">{booking.created_at}</p>
              </td>

              {/* Purchase Time */}
              <td className="px-4 py-3">
                <div className="flex justify-start items-center gap-2">
                  <div
                    className={`${changeStatus(
                      booking.status
                    )} w-3 h-3 rounded-full`}
                  ></div>
                  <p className="dark:text-slate-100 text-sm">
                    {booking.status}
                  </p>
                </div>
              </td>

              {/* Total Ticket Purchase */}
              <td className="px-4 py-3 text-center">
                <p className="dark:text-slate-100">{booking.capacity}</p>
              </td>

              {/* Action */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button className="text-blue-500 text-lg">
                    <FaEye className="" />
                  </button>
                  |
                  <button className="text-red-600">
                    <FaRegTrashCan />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
