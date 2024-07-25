import { useRef, useState, useEffect } from "react";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import { recentEvents } from "@/components/data/StaticData";
import { BiPlus } from "react-icons/bi";
import useTimeAgo from "@/hooks/useTimeAgo";

const EventsTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const navigate = useNavigate();
  const { formatEventDate } = useTimeAgo();

  const getStatusClass = (status) => {
    switch (status) {
      case "published":
        return "bg-green-600";
      case "draft":
        return "bg-yellow-600";
      case "cancelled":
        return "bg-red-600";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/events/admin_fetch", data);
          callback(response.data);
        },
        columns: [
          {
            title: "Event Details",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                  <img
                    src="${data.cover_image}"
                    alt="event"
                    class="w-20 h-10 rounded"
                  />
                  <div>
                    <p class="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
                      ${data.title}
                    </p>
                    <p class="text-xs text-gray dark:text-gray">${data.address}</p>
                  </div>
                </div>
              </td>`;
            },
          },
          {
            title: "Date",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3 text-center">
                <p class="dark:text-slate-100 text-sm">${formatEventDate(
                  data.date
                )}</p>
              </td>`;
            },
          },
          {
            title: "Status",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3 text-center">
                <div class="flex justify-start items-center gap-2">
                  <div
                    class="${getStatusClass(data.status)} w-2 h-2 rounded-full"
                  ></div>
                  <p class="dark:text-slate-100 text-sm">${data.status}</p>
                </div>
              </td>`;
            },
          },
          {
            title: "Action",
            data: null,
            render: () => {
              return `
              <div class="flex items-center gap-2">
                <button class="text-blue-500 text-md">
                  View
                </button>
                |
                <button class="text-orange-600 text-md">
                  Delete
                </button>
              </div>
              `;
            },
          },
        ],
      });
      setDataTable(table);
    }

    return () => {
      if (dataTable) {
        dataTable.destroy();
      }
    };
  }, [dataTable]);

  const handleCreateEvent = () => {
    navigate("/create-event");
  };

  return (
    <>
      <div className="w-full mt-10">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
            All Events
          </h1>

          <button
            onClick={handleCreateEvent}
            className="text-sm flex items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
          >
            <BiPlus />
            Create Event
          </button>
        </div>

        <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
          <table
            ref={tableRef}
            id="attendee_table"
            className="min-w-full bg-white dark:bg-darkGray stripe"
          >
            <thead className="rounded-md py-5">
              <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
                <th className="px-4 py-5 font-semibold text-start">
                  Event Details
                </th>
                <th className="px-4 py-5 font-semibold text-start">Date</th>
                <th className="px-4 py-5 font-semibold text-start">Status</th>
                <th className="px-4 py-5 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray"></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const TableRow = ({ event, index }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "published":
        return "bg-green-600";
      case "draft":
        return "bg-yellow-600";
      case "cancelled":
        return "bg-red-600";
      default:
        return "";
    }
  };

  return (
    <tr
      className={`dark:border-b ${
        index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
      } dark:text-slate-200 dark:border-gray/30`}
    >
      <td className="px-4 py-3 text-center">
        <p className="text-sm font-semibold text-dark dark:text-slate-100">
          {event.id}
        </p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={event.eventImage}
            alt="event"
            className="w-20 h-10 rounded"
          />
          <div>
            <p className="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
              {event.title}
            </p>
            <p className="text-xs text-gray-400">{event.location}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="dark:text-slate-100 text-sm">{event.created_at}</p>
      </td>
      <td className="px-4 py-3">
        <div className="flex justify-start items-center gap-2">
          <div
            className={`${getStatusClass(event.status)} w-2 h-2 rounded-full`}
          ></div>
          <p className="dark:text-slate-100 text-sm">{event.status}</p>
        </div>
      </td>
      <td className="px-4 py-3 text-center">
        <p className="dark:text-slate-100 text-sm">{event.capacity} / 500</p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="text-blue-500 text-lg">
            <FaEye />
          </button>
          |
          <button className="text-orange-600">
            <FaRegTrashCan />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EventsTable;
